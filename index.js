const fs = require("fs");
const mammoth = require("mammoth");

//Change path to your .docx file
const filePath = "./myDocument.docx";

const extractText = (text) => {
    //Change condition of split from original text if wanted.
    //Here, every line in .docx will create a String
    return text.split("\n").filter((line) => line.trim() !== "");
};

mammoth
    .extractRawText({ path: filePath })
    .then((result) => {
        const fullText = extractText(result.value);
        fs.writeFileSync(
            //Change name of .json file that will be created if wanted
            "finalFile.json",
            JSON.stringify(fullText, null, 2)
        );
        console.log("🎉 ¡JSON file created succesfully! 🎉");
    })
    .catch((error) => {
        console.log("🥀 Something went wrong... 🥀", error);
    });
