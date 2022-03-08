let houseStuff = {
  isClean: true,
  table: ["clock", "mobile"],
  hanger: ["shirt", "pant", "tshirt"],
  backPack: {
    diary: {
      notes: ["english", "bangla", "math", "Tamil Culture"],
    },
  },
  roomMate: false,
  food: "fruits",
  roomSize: "400 sft",
};

const fullName = "Bayezid Mir";
const saving = 2500;

// template literal
const templateLiteral = `The only person living in the room is ${fullName}.The room size is ${houseStuff["roomSize"]}. He keeps note on ${houseStuff.backPack.diary.notes[3]} `;
console.log(templateLiteral);
