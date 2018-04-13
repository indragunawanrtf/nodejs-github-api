let profile = require('./profile.js')

let profiles = ['indragunawanrtf', 'bernamaxim', 'fathan', 'kubido', 'sabril', 'wycats', 'vanbumi', 'adopabianko',
                'devifr', 'ahmadsoe', 'sbatson5', 'rizafahmi']
profiles.map(user => {
  return profile.get(user);
});

