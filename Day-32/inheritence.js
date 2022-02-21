class SalesAssociate {
  name;
  designation = "Sales Advisor";
  company = "bproperty.com";
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }
  keyRole() {
    console.log(this.name, "is a sales advisor of Bproperty");
  }
}

const jey = new SalesAssociate("Jumbo Jey", "MGH");
// jey.keyRole();
// console.log(jey);
