// @flow

// unfinished list...
const whitelist = [
  "tz1WCd2jm4uSt4vntk4vSuUWoZQGhLcDuR9q",
  "tz1Z3KCf8CLGAYfvVWPEr562jDDyWkwNF7sT",
  "tz1Scdr2HsZiQjc7bHMeBbmDRXYVvdhjJbBh",
  "tz1VmiY38m3y95HqQLjMwqnMS7sdMfGomzKi",
  "tz1bHzftcTKZMTZgLLtnrXydCm6UEqf4ivca",
  "tz1g8vkmcde6sWKaG2NN9WKzCkDM6Rziq194",
  "tz1PWCDnz783NNGGQjEFFsHtrcK5yBW4E2rm",
  "tz1d6Fx42mYgVFnHUW8T8A7WBfJ6nD9pVok8",
  "tz1RV1MBbZMR68tacosb7Mwj6LkbPSUS1er1",
  "tz1KfEsrtDaA1sX7vdM4qmEPWuSytuqCDp5j",
  "tz1QLXqnfN51dkjeghXvKHkJfhvGiM5gK4tc",
  "tz1V4qCyvPKZ5UeqdH14HN42rxvNPQfc9UZg",
  "tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6",
  "tz1Pwgj6j55akKCyvTwwr9X4np1RskSXpQY4",
  "tz1Ldzz6k1BHdhuKvAtMRX7h5kJSMHESMHLC",
  "tz1NortRftucvAkD1J58L32EhSVrQEWJCEnB",
  "tz1Kf25fX1VdmYGSEzwFy1wNmkbSEZ2V83sY",
  "tz1RCFbB9GpALpsZtu6J58sb74dm8qe6XBzv",
  "tz1eEnQhbwf6trb8Q8mPb2RaPkNk2rN7BKi8",
  "tz1RSWMYKGAykpizFteowByYMueCYv9TMn1L",
  "tz1Tnjaxk6tbAeC2TmMApPh8UsrEVQvhHvx5",
  "tz1LLNkQK4UQV6QcFShiXJ2vT2ELw449MzAA",
  "tz1dbfppLAAxXZNtf2SDps7rch3qfUznKSoK",
  "tz1b9MYGrbN1NAxphLEsPPNT9JC7aNFc5nA4",
  "tz1Q8QkSBS63ZQnH3fBTiAMPes9R666Rn6Sc",
  "tz2FCNBrERXtaTtNX6iimR1UJ5JSDxvdHM93",
  "tz1MXFrtZoaXckE41bjUCSjAjAap3AFDSr3N",
  "tz1Vyuu4EJ5Nym4JcrfRLnp3hpaq1DSEp1Ke",
  "tz1S1Aew75hMrPUymqenKfHo8FspppXKpW7h",
  "tz1SohptP53wDPZhzTWzDUFAUcWF6DMBpaJV",
  "tz1P2Po7YM526ughEsRbY4oR9zaUPDZjxFrb",
  "tz1KzSC1J9aBxKp7u8TUnpN8L7S65PBRkgdF",
  "tz1STeamwbp68THcny9zk3LsbG3H36DMvbRK",
  "tz1bLwpPfr3xqy1gWBF4sGvv8bLJyPHR11kx",
  "tz1TaLYBeGZD3yKVHQGBM857CcNnFFNceLYh",
  "tz1fJHFn6sWEd3NnBPngACuw2dggTv6nQZ7g",
];

// we give no ordering preference. it's settled at module load time
whitelist.sort(() => Math.random() - 0.5);

export default whitelist;
