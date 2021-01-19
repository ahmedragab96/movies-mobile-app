components=(carousel movieCard actorCard genreCard slider search video info)

function generate_component() {
  component_name="$1"
  component_component_name="${component_name}Component"
  exported_component_component_name="$(tr '[:lower:]' '[:upper:]' <<< ${component_component_name:0:1})${component_component_name:1}"
  component_content=$(
    cat <<EOF
import React from 'react';
import {
  View,
} from 'react-native';
import {
  useStyles,
} from 'elephanz-rn-ui';
import {
  ${exported_component_component_name}Props,
} from './types';
import {
  styles,
} from './styles';

const ${exported_component_component_name}: React.FC<${exported_component_component_name}Props> = () => {
  const {
    selectStyle,
  } = useStyles(styles);
  return <View />;
}

EOF
  )
  component_types_content=$(
    cat <<EOF
export interface ${exported_component_component_name}Props {
}

export interface ${exported_component_component_name}Styles {
}

EOF
  )
  component_styles_content=$(
    cat <<EOF
import {
  Theme,
} from 'elephanz-rn-ui';
import {
  ${exported_component_component_name}Styles,
} from './types';

export const styles = (theme: Theme): ${exported_component_component_name}Styles => ({
});

EOF
  )
  mkdir ./src/components/$component
  touch ./src/components/$component/index.tsx
  echo "$component_content" > ./src/components/$component/index.tsx
  touch ./src/components/$component/types.ts
  echo "$component_types_content" > ./src/components/$component/types.ts
  touch ./src/components/$component/styles.ts
  echo "$component_styles_content" > ./src/components/$component/styles.ts
}

for component in ${components[@]}; do
  generate_component "$component"
done
