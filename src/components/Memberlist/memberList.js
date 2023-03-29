const peopleArray = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "Marley",
    country: "Jamaica",
    age: 57,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1501620905740-6c420cea828f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Smith",
    country: "USA",
    age: 25,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80",
  },
  {
    id: 3,
    firstName: "Maria",
    lastName: "Garcia",
    country: "Mexico",
    age: 31,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 4,
    firstName: "Hiroshi",
    lastName: "Tanaka",
    country: "Japan",
    age: 42,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1595032840449-8c20dc28a302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 5,
    firstName: "Jasmine",
    lastName: "Singh",
    country: "India",
    age: 29,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1533781107041-b3b8441e1612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 6,
    firstName: "Pablo",
    lastName: "Martinez",
    country: "Spain",
    age: 36,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 7,
    firstName: "Emilie",
    lastName: "Dubois",
    country: "France",
    age: 27,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1620770175211-08191dfcf05b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 8,
    firstName: "Chiara",
    lastName: "Rossi",
    country: "Italy",
    country: "Italy",
    age: 33,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1604364721460-0cbc5866219d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 9,
    firstName: "Sebastian",
    lastName: "Mueller",
    country: "Germany",
    age: 39,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 10,
    firstName: "Yuan",
    lastName: "Li",
    country: "China",
    age: 28,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  },
  {
    id: 11,
    firstName: "Charles",
    lastName: "Watson",
    country: "USA",
    age: 24,
    membership: "premium",
    profilePicture:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 12,
    firstName: "Sakura",
    lastName: "Yamamoto",
    country: "Japan",
    age: 28,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80",
  },
  {
    id: 13,
    firstName: "Miguel",
    lastName: "Rodriguez",
    country: "Spain",
    age: 24,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: 14,
    firstName: "Isabella",
    lastName: "Costa",
    country: "Brazil",
    age: 31,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    id: 15,
    firstName: "Ming",
    lastName: "Li",
    country: "China",
    age: 29,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1439778615639-28529f7628bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: 16,
    firstName: "Emma",
    lastName: "Larsson",
    country: "Sweden",
    age: 26,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    id: 17,
    firstName: "Hassan",
    lastName: "Ali",
    country: "Egypt",
    age: 32,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1623297990356-3a644b1b15d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 18,
    firstName: "Sofia",
    lastName: "Garcia",
    country: "Spain",
    age: 27,
    membership: "pro",
    profilePicture:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: 19,
    firstName: "Abdullah",
    lastName: "Khan",
    country: "Pakistan",
    age: 33,
    membership: "basic",
    profilePicture:
      "https://images.unsplash.com/photo-1628264047320-49bab8dc07d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export default peopleArray;
