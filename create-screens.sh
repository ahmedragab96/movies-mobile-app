screens=(splash home movies genres actors movieDetails actorDetails genreDetails)

function generate_screen() {
  screen_name="$1"
  screen_component_name="${screen_name}Screen"
  exported_screen_component_name="$(tr '[:lower:]' '[:upper:]' <<< ${screen_component_name:0:1})${screen_component_name:1}"
  screen_content=$(
    cat <<EOF
import React from 'react';
import {
  View,
} from 'react-native';
import {
  baseScreen,
} from 'hoc';

const ${screen_component_name}: React.FC = () => {
  return <View />;
}

export const ${exported_screen_component_name} = baseScreen(
  ${screen_component_name},
);

EOF
  )
  mkdir ./src/screens/$screen
  touch ./src/screens/$screen/index.tsx
  echo "$screen_content" > ./src/screens/$screen/index.tsx
}

for screen in ${screens[@]}; do
  generate_screen "$screen"
done
