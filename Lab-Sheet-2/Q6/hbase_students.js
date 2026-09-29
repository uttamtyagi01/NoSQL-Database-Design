console.log("Q6 - HBase Students Table");

const hbaseCommands = [
  "create 'Students', 'personal', 'academic'",

  "put 'Students', '1', 'personal:name', 'Aarav'",
  "put 'Students', '1', 'personal:course', 'BCA'",
  "put 'Students', '1', 'academic:semester', '1'",
  "put 'Students', '1', 'academic:marks', '82'",

  "put 'Students', '2', 'personal:name', 'Priya'",
  "put 'Students', '2', 'personal:course', 'BCA'",
  "put 'Students', '2', 'academic:semester', '2'",
  "put 'Students', '2', 'academic:marks', '88'",

  "put 'Students', '3', 'personal:name', 'Rahul'",
  "put 'Students', '3', 'personal:course', 'BSc'",
  "put 'Students', '3', 'academic:semester', '3'",
  "put 'Students', '3', 'academic:marks', '76'",

  "put 'Students', '4', 'personal:name', 'Ananya'",
  "put 'Students', '4', 'personal:course', 'BCA'",
  "put 'Students', '4', 'academic:semester', '4'",
  "put 'Students', '4', 'academic:marks', '91'",

  "put 'Students', '5', 'personal:name', 'Vikram'",
  "put 'Students', '5', 'personal:course', 'BSc'",
  "put 'Students', '5', 'academic:semester', '2'",
  "put 'Students', '5', 'academic:marks', '79'",

  "get 'Students', '1'",
  "put 'Students', '1', 'academic:marks', '95'",
  "scan 'Students'",
  "deleteall 'Students', '5'"
];

hbaseCommands.forEach(command => console.log(command));
