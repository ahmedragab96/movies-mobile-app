/* eslint-disable */
const axios = require('axios');

const inform = (info) => {
  console.log(`================> ${info} <================`);
};

const error = (errors) => {
  console.error('================> Error <================');
  if (typeof errors === 'string') {
    console.error(errors);
  }
  if (Array.isArray(errors)) {
    errors.forEach((err) => console.error(err));
  }
  console.error('=========================================');
};

const abort = () => {
  process.exit(1);
};

const deploy = async () => {
  try {
    const privateToken = process.env.OAUTH_TOKEN;
    const projectId = process.env.CI_PROJECT_ID;
    const baseUrl = `https://gitlab.com/api/v4/projects/${projectId}`;
    inform('Creating a merge request between 0-ci-version-bump-temp and develop');
    const {
      data: developMergeRequest,
    } = await axios.post(`${baseUrl}/merge_requests`, {
      source_branch: '0-ci-version-bump-temp',
      target_branch: 'develop',
      title: '[CI] Version bump',
      remove_source_branch: true,
    }, {
      headers: {
        'PRIVATE-TOKEN': privateToken,
      },
    });
    inform('Setting required approvals to 0');
    await axios.post(`${baseUrl}/merge_requests/${developMergeRequest.iid}/approvals`, {
      approvals_required: 0,
    }, {
      headers: {
        'PRIVATE-TOKEN': privateToken,
      },
    });
    inform('Merging into develop');
    await axios.put(`${baseUrl}/merge_requests/${developMergeRequest.iid}/merge`, {}, {
      headers: {
        'PRIVATE-TOKEN': privateToken,
      },
    });
    inform('Creating a merge request between develop and master');
    const {
      data: masterMergeRequest,
    } = await axios.post(`${baseUrl}/merge_requests`, {
      source_branch: 'develop',
      target_branch: 'master',
      title: '[CI] Version bump',
    }, {
      headers: {
        'PRIVATE-TOKEN': privateToken,
      },
    });
    inform('Setting required approvals to 0');
    await axios.post(`${baseUrl}/merge_requests/${masterMergeRequest.iid}/approvals`, {
      approvals_required: 0,
    }, {
      headers: {
        'PRIVATE-TOKEN': privateToken,
      },
    });
    inform('Merging into master');
    await axios.put(`${baseUrl}/merge_requests/${masterMergeRequest.iid}/merge`, {}, {
      headers: {
        'PRIVATE-TOKEN': privateToken,
      },
    });
  } catch (err) {
    console.warn(err);
    error(err);
    abort();
  }
};

deploy();
