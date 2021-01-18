set -e
git fetch
git checkout develop
git pull
git branch 0-ci-version-bump-temp
git checkout 0-ci-version-bump-temp
if [[ $CI_VERSION_BUMP = 'patch' ]] || [[ $CI_VERSION_BUMP = 'minor' ]] || [[ $CI_VERSION_BUMP = 'major' ]]
then
  echo Performing a $CI_VERSION_BUMP version bump.
else
  export CI_VERSION_BUMP='minor'
  echo No custom CI_VERSION_BUMP variable provided. Performing a $CI_VERSION_BUMP version bump.
fi
git reset --hard
npm --no-git-tag-version version $CI_VERSION_BUMP
git push --set-upstream origin 0-ci-version-bump-temp
