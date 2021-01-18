#!/usr/bin/env bash

if [ "$ENV" == "production" ];
then
  echo "Switching to Firebase Production environment";
  cp -rf "src/firebase/firebase_production/google-services.json" android/app
  cp -rf "src/firebase/firebase_production/GoogleService-Info.plist" ios/contact
  exit 0
else
  echo "Switching to Firebase Development environment"
  cp -rf "src/firebase/firebase_development/google-services.json" android/app
  cp -rf "src/firebase/firebase_development/GoogleService-Info.plist" ios/contact
  exit 0
fi
