
  Pod::Spec.new do |s|
    s.name = 'CapacitorFirebaseAuth'
    s.version = '3.0.0-rc.0'
    s.summary = 'Capacitor plugin for Firebase Authentication'
    s.license = 'MIT'
    s.homepage = 'https://github.com/Dev-it-a-dev/capacitor-firebasecompat-auth.git'
    s.author = 'Bernardo Baumblatt'
    s.source = { :git => 'https://github.com/Dev-it-a-dev/capacitor-firebasecompat-auth.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '12.0'
    s.dependency 'Capacitor'
    s.dependency 'GoogleSignIn'
    s.dependency 'FBSDKCoreKit'
    s.dependency 'FBSDKLoginKit'
    s.dependency 'Firebase/Core'
    s.dependency 'Firebase/Auth'
    s.static_framework = true
  end
