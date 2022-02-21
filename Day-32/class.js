// Practice
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

class Shyamoli {
  area;
  usedFor;
  bestAmenity;
  constructor(areaName, purpose, feature) {
    this.area = areaName;
    this.usedFor = purpose;
    this.bestAmenity = feature;
  }
  whyChoose() {
    console.log(
      this.area,
      "is usually choosen for",
      this.usedFor,
      ".besides, it has",
      this.bestAmenity,
      "to offer"
    );
  }
}

const knowWhy = new Shyamoli(
  "Dhanmondi",
  "Commercial & Residential",
  "Business HUB"
);
knowWhy.whyChoose();
