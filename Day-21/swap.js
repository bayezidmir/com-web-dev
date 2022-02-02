let bayezid = 93;
let anik = 90;
console.log(bayezid, anik);
let akash = bayezid;
bayezid = anik;
anik = akash;
console.log(bayezid, anik);

// destructtring

[bayezid, anik] = [anik, bayezid];
console.log(bayezid, anik);

let bayezidm = "bike";
let roman = "car";
console.log(bayezidm, roman);
let mir = bayezidm;
bayezidm = roman;
roman = mir;
console.log(bayezidm, roman);
