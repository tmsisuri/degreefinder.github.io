document.addEventListener("DOMContentLoaded", () => {
    //get elements
    const streamSelector = document.getElementById("stream");
    const subjectsSection1 = document.getElementById("subjects-section-1");
    const subjectsSection2 = document.getElementById("subjects-section-2");
    const subjectsSection3 = document.getElementById("subjects-section-3");
    const subjects1Dropdown = document.getElementById("subjects-1");
    const subjects2Dropdown = document.getElementById("subjects-2");
    const subjects3Dropdown = document.getElementById("subjects-3");
    const resultSection = document.getElementById("result");
    const degreesList = document.getElementById("courses-list");
    const checkCombinationButton = document.getElementById("check-combination");

    //subjects data
    const subjects = {
        physical_science: ["Agricultural Science","Biology","Chemistry","Combined Mathematics","Higher Mathematics","Information & Communication Technology","Mathematics","Physics"],
        biological_science: ["Agricultural Science","Agriculture Technology","Bio-Resource Technology","Biology","Chemistry","Combined Mathematics","Food Technology","Higher Mathematics","Mathematics","Physics"],
        commerce: ["Accounting","Agricultural Science","Business Statistics","Business Studies","Combined Mathematics","Economics","English","French","Geography","German","History","Information & Communication Technology","Logic & Scientific Method","Mathematics","Political Science"],
        arts: ["Accounting","Agricultural Science","Agriculture Technology","Arabic","Art","Bio-Resource Technology","Buddhism","Buddhist Civilization","Business Statistics","Chinese","Christian Civilization","Christianity","Civil Technology","Combined Mathematics","Communication & Media Studies", 
               "Dancing-Baratha","Dancing-Sinhala","Drama & Theatre-English","Drama & Theatre-Sinhala","Drama & Theatre-Tamil","Economics","Electrical, Electronic and Information Technology","English","Food Technology","French","Geography","German","Greek & Roman Civilization","Hindu Civilization","Hinduism",
                "Hindi","History","Home Economics","Information & Communication Technology","Islamic Civilization","Islam","Japanese","Logic & Scientific Method","Malay","Mathematics","Mechanical Technology","Music-Carnatic","Music-Oriental","Music-Western","Pali","Political Science","Russian","Sanskrit","Sinhala","Tamil","Korean"],
        biosystems_technology: ["Accountancy","Agricultural Science","Art","Biosystems Technology (BST)","Business Studies","Communication and Media Studies","Economics","English","Geography","Home Economics","Information & Communication Technology","Mathematics","Science for Technology (SFT)"],
        engineering_technology: ["Accountancy","Agricultural Science","Art","Business Studies","Communication and Media Studies","Economics","Engineering Technology (ET)","English","Geography","Home Economics","Information & Communication Technology","Mathematics","Science for Technology (SFT)"],
    };

    //degrees data
    const Degrees = [
        {name : "Medicine", code : "001" },
        {name : "Dental Surgery", code : "002" },
        {name : "Veterinary Science", code : "003" },
        {name : "Agriculture", code : "004" },
        {name : "Food Science and Nutrition", code : "005" },
        {name : "Biological Science", code : "006" },
        {name : "Applied Sciences Biological Science", code : "007" },
        {name : "Engineering ", code : "008"},
        {name : "Earth Resources Engineering", code : "009"},
        {name : "Textile and Apparel Engineering", code : "010"},
        {name : "Quantity Surveying", code : "011"},
        {name : "Computer Science", code : "012"},
        {name : "Physical Science", code : "013"},
        {name : "BSc in Surveying Science", code : "014"},
        {name : "Applied Science", code : "015"},
        {name : "Management", code : "016"},
        {name : "Estate Management and valuation", code : "017"},
        {name : "Commerce", code : "018"},
        {name : "Arts ", code : "019"},
        {name : "BA Honours Degree in Mass Media", code : "020"},
        {name : "Art sab", code : "021"},
        {name : "Management studies TV", code : "022"},
        {name : "Architecture", code : "023"},
        {name : "Design", code : "024"},
        {name : "Laws", code : "025"},
        {name : "Information Technology", code : "026"},
        {name : "Management and Information Technology", code : "027"},
        {name : "Management public Honours", code : "028"},
        {name : "BA Communication Studies", code : "029"},
        {name : "Town and Country Planning", code : "030" },
        {name : "BA Honours in Peace and Conflict Resolution", code : "031" },
        {name : "Ayurvedic Medicine and Surgery", code : "032" },
        {name : "Unani Medicine and Surgery", code : "033" },
        {name : "Fashion Design and Product Development", code : "034" },
        {name : "Food Science and Technology", code : "035" },
        {name : "Siddha Medicine and Surgery", code : "036" },
        {name : "Nursing", code : "037" },
        {name : "Information and Communication Technology", code : "038" },
        {name : "Agricultural Technology and Management", code : "039" },
        {name : "BA Honours Degree in Performing Arts", code : "041"},
        {name : "Health Promotion", code : "050" },
        {name : "Pharmacy", code : "051" },
        {name : "Medical Laboratory Sciences", code : "052" },
        {name : "Radiography", code : "053" },
        {name : "Physiotherapy", code : "054" },
        {name : "Environmental Conservation and Management", code : "055" },
        {name : "Facilities Management", code : "056"},
        {name : "Transport Management and Logistics Engineering , TMLE", code : "057"},
        {name : "Biochemistry and Molecular Biology", code : "058" },
        {name : "Industrial Statistics and Mathematical Finance", code : "059"},
        {name : "Statistics Operations Research", code : "060"},
        {name : "Fisheries and Marine Sciences", code : "062" },
        {name : "Islamic Studies", code : "063"},
        {name : "Science and Technology", code : "064" },
        {name : "Computer Science and Technology", code : "065" },
        {name : "Entrepreneurship and Management", code : "066" },
        {name : "Animal Production and Food Technology", code : "067" },
        {name : "Music", code : "068"},
        {name : "Dance ", code : "069"},
        {name : "Art and Design", code : "070" },
        {name : "Drama Theatre ", code : "071"},
        {name : "Visual and Technological Arts", code : "072" },
        {name : "Export Agriculture", code : "073" },
        {name : "Industrial Information Technology", code : "075"},
        {name : "Mineral Resources and Technology", code : "076"},
        {name : "Business Information system", code : "077"},
        {name : "Management and Information Technology", code : "079"},
        {name : "Computing Information Systems", code : "080"},
        {name : "Physical Education", code : "081" },
        {name : "Sports Science and Management", code : "082" },
        {name : "Speech and Hearing Sciences", code : "083" },
        {name : "BA in Arabic Language", code : "084"},
        {name : "Visual Art", code : "085" },
        {name : "Animal Science and Fisheries", code : "086" },
        {name : "Food Production and Technology Management", code : "087" },
        {name : "Aquatic Resources Technology", code : "088" },
        {name : "Hospitality, Tourism and Events Management", code : "090" },
        {name : "Information Technology and Management", code : "091" },
        {name : "Tourism and Hospitality Management", code : "092" },
        {name : "Agricultural Resource Management and Technology", code : "093" },
        {name : "Agribusiness Management", code : "094" },
        {name : "Green Technology", code : "095" },
        {name : "Information Systems", code : "096" },
        {name : "Landscape Architecture", code : "097" },
        {name : "Translation Studies", code : "098" },
        {name : "Software Engineering", code : "099"},
        {name : "Film and Television Studies", code : "100"},
        {name : "Project Management", code : "101" },
        {name : "Engineering Technology", code : "102"},
        {name : "Biosystems Technology (BST)", code : "103" },
        {name : "Information Communication Technology", code : "104" },
        {name : "BA in Teaching English as a Second Language TESL Honours", code : "105" },
        {name : "Marine and Fresh Water Sciences", code : "106"},
        {name : "Food Business Management", code : "107"},
        {name : "Business Science", code : "109"},
        {name : "Financial Engineering", code : "110"},
        {name : "Geographical Information Science", code : "111"},
        {name : "Social Work", code : "112"},
        {name : "Financial Mathematics and Industrial Statistics", code : "113"},
        {name : "Human Resource Development", code : "114" },
        {name : "Occupational Therapy", code : "115" },
        {name : "Optometry", code : "116" },
        {name : "Artificial Intelligence", code : "117"},
        {name : "Applied Chemistry", code : "118"},
        {name : "Electronics and Computer Science", code : "119"},
        {name : "Indigenous Medicinal Resources", code : "120" },
        {name : "Health Information and Communication Technology", code : "121" },
        {name : "Health Tourism and Hospitality Management", code : "122" },
        {name : "Biomedical Technology", code : "123" },
        {name : "Indigenous Pharmaceutical Technology", code : "124" },
        {name : "Yoga and Parapsychology", code : "125" },
        {name : "Social Studies in Indigenous Knowledge", code : "126" },
        {name : "Accounting Information System", code : "127"},
        {name : "Arts Information Technology", code : "128"},
        {name : "Aquatic Bioresources", code : "129" },
        {name : "Urban Bioresources", code : "130" },
        {name : "Financial Economics", code : "131"},
        {name : "English Language and Applied Linguistics", code : "132"},
        {name : "Banking and Insurance ", code : "133"},
        {name : "Creative Music Technology and Production", code : "134"},
        {name : "Plantation Management and Technology", code : "135"},
        {name : "Data Science", code : "136"},
        {name : "Primary Education", code : "137"},
        {name : "Medical Imaging Technology", code : "138" },
        {name : "Polymer Science and Industrial Management", code : "139"}
    ];

    //valid subject combinations 

    const validSubjectCombinations = {

        //Physical Science Stream valid combinatios

        "Chemistry,Combined Mathematics,Physics" : [
            "008","009","010","011","012","013","014","015","022","023","024","025","026","027","030","031","034","038","054","056","057","059","060","064","065","066",
            "075","076","079","080","081","082","090","091","092","096","097","099","100","106","107","109","111","113","114","117","118","119","122","125","126","132",
            "134","135","136","137","139"],
        
        "Agricultural Science,Chemistry,Combined Mathematics" : [
            "013","015","022","023","024","025","026","030","031","034","038","060","064","075","079","081","082","091","096","097","099","100","101","113","114","125",
            "126","132","134","137"],

        "Biology,Chemistry,Combined Mathematics" : [
            "006","007","013","015","022","023","024","025","026","030","031","034","038","050","055","060","064","065","067","073","075","079","081","082","088","091",
            "096","097","100","106","107","113","114","125","126","132","134","137"],

        "Chemistry,Combined Mathematics,Higher Mathematics" : [
            "011","012","013","015","022","023","024","025","026","030","031","034","038","059","060","064","065","075","079","080","081","082","091","096","097","100",
            "113","114","117","125","126","132","134","136","137"],

        "Agricultural Science,Combined Mathematics,Physics" : [
            "013","014","015","022","023","024","025","026","030","031","034","038","060","064","075","079","081","082","091","096","097","100","101","113","114","125",
            "126","132","134","137"],

        "Biology,Combined Mathematics,Physics" : [
            "013","014","015","022","023","024","025","026","030","031","034","038","060","064","065","075","079","081","082","091","096","097","100","101","107","113",
            "114","125","126","132","134","136","137"],

        "Combined Mathematics,Higher Mathematics,Physics" : [
            "011","012","013","014","015","022","023","024","025","026","030","031","034","038","059","060","064","065","075","079","080","081","082","091","096","097",
            "099","100","113","114","117","119","125","126","132","134","136","137"],

        "Agricultural Science,Chemistry,Higher Mathematics" : [
            "013","015","022","023","024","025","026","030","031","034","064","079","081","082","091","097","100","114","125","126","132","134","137"],

        "Chemistry,Higher Mathematics,Physics" : [
            "011","012","013","015","022","023","024","025","026","030","031","034","038","054","064","065","075","079","080","081","082","091","096","097","100","114",
            "117","118","119","125","126","132","134","136","137"],

        "Agricultural Science,Higher Mathematics,Physics" : [
            "015","022","023","024","025","026","030","031","034","038","064","075","079","081","082","091","096","097","100","114","125","126","132","134","137"],
        
        "Biology,Higher Mathematics,Physics" : [
            "015","022","023","024","025","026","030","031","034","038","064","065","075","079","081","082","091","096","097","100","114","125","126","132","134","135","137"],

        "Chemistry,Combined Mathematics,Information & Communication Technology" : [
            "011","012","015","022","023","024","025","026","027","030","031","034","038","060","065","075","079","080","081","082","091","092","096","097","100","101",
            "109","113","114","117","125","126","132","134","136","137"],

        "Combined Mathematics,Information & Communication Technology,Physics" : [
            "011","012","014","015","022","023","024","025","026","027","030","031","034","038","060","065","066","075","079","080","081","082","090","091","092","096",
            "097","099","100","101","108","109","111","113","114","117","119","122","125","126","132","134","136","137"],

        "Chemistry,Higher Mathematics,Information & Communication Technology" : [
            "011","012","015","022","023","024","025","026","030","031","034","038","065","075","079","080","081","082","091","096","097","100","114","117","119","125",
            "126","132","134","136","137"],

        "Higher Mathematics,Information & Communication Technology,Physics" : [
            "011","012","015","022","023","024","025","026","030","031","034","038","065","075","079","080","081","082","091","096","097","100","114","117","119","125",
            "126","132","134","136","137"],

        "Combined Mathematics,Higher Mathematics,Information & Communication Technology" : [
            "011","012","022","023","024","025","026","030","031","034","038","060","075","079","080","081","082","091","096","097","100","101","113","114","117","125",
            "126","132","134","136","137",],

        //Biological Science Stream valid combinatios

        "Biology,Chemistry,Physics" : [
            "001","002","003","004","005","006","007","022","023","024","025","026","027","030","031","032","033","034","035","036","037","038","039","050","051","052",
            "053","054","055","058","062","064","065","066","067","073","075","076","079","081","082","083","086","087","088","090","091","092","093","094","095","096",
            "097","100","106","107","111","114","115","116","118","120","122","124","125","126","129","130","132","134","135","137","138","139"],

        "Biology,Chemistry,Mathematics" : [
            "004","005","006","007","022","023","024","025","026","030","031","034","039","050","055","064","065","067","073","079","081","082","087","088","091","093",
            "097","100","101","114","125","126","132","134","137"],

        "Agricultural Science,Chemistry,Physics" : [
            "004","005","022","023","024","025","026","030","031","034","035","038","039","075","079","081","082","087","091","092","093","096","097","100","107","114",
            "118","120","124","125","126","132","134","137"],

        "Agricultural Science,Chemistry,Mathematics" : [
            "004","005","022","023","024","025","026","030","031","034","039","079","081","082","087","091","093","097","100","101","114","125","126","132","134","137"],

        "Agricultural Science,Biology,Chemistry" : [
            "004","005","006","007","022","023","024","025","030","031","034","039","050","055","064","066","067","073","079","081","082","086","087","088","090","092",
            "093","094","095","097","100","101","107","111","114","120","122","124","125","126","129","130","132","134","135","137"],
        
        "Biology,Chemistry,Higher Mathematics" : [
            "006","007","013","015","022","023","024","025","026","030","031","034","050","064","065","067","073","079","081","082","088","091","097","100","114","125",
            "126","132","134","137"],
        
        "Biology,Chemistry,Combined Mathematics" : [
            "006","007","013","015","022","023","024","025","026","030","031","034","038","050","055","060","064","065","067","073","075","079","081","082","088","091",
            "096","097","100","101","107","113","114","125","126","132","134","137"],

        "Biology,Chemistry,Food Technology" : [
            "022","024","031","034","079","081","082","094","095","100","114","125","126","132","134","137"],

        "Biology,Bio-Resource Technology,Chemistry" : [
            "022","024","031","034","079","081","082","094","095","100","114","125","126","132","134","137"],

        "Agriculture Technology,Biology,Chemistry" : [
            "022","024","031","034","079","081","082","094","095","100","114","125","126","132","134","137"],

        //Commerce Stream valid combinatios

        "Accounting,Business Studies,Economics" : [
            "016","017","018","021","022","024","025","028","031","034","056","066","077","079","081","082","090","092","100","101","107","109","110","114","122","125",
            "126","131","132","133","134","137"],

        "Accounting,Agricultural Science,Business Studies" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","097","100","101","114","122","125","126","132","134","137"],

        "Accounting,Business Studies,Geography" : [
            "016","017","018","021","022","023","024","025","028","031","034","066","079","081","082","090","092","097","100","101","114","122","125","126","132","134","137"],

        "Accounting,Business Statistics,Business Studies" : [
            "016","017","018","021","022","024","025","028","031","034","066","077","079","081","082","090","091","092","100","101","114","122","125","126","127","132","134","137"],

        "Accounting,Business Studies,German" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","114","122","125","126","132","134","137"],

        "Accounting,Business Studies,Combined Mathematics" : [
            "011","016","017","018","021","022","023","024","025","026","028","030","031","034","038","066","075","077","079","081","082","090","091","092","096","097",
            "100","101","113","114","122","125","126","132","134","137"],

        "Accounting,Business Studies,Mathematics" : [
            "016","017","018","021","022","024","025","026","028","031","034","079","081","082","091","092","100","101","114","122","125","126","131","132","134","137"],

        "Accounting,Business Studies,History" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","114","122","125","126","131","132","134","137"],

        "Accounting,Business Studies,Political Science" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","114","122","125","126","132","134","137"],

        "Accounting,Business Studies,English" : [
            "017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","098","100","101","105","114","122","125","126","132","134","137"],

        "Accounting,Business Studies,Logic & Scientific Method" : [
            "016","017","018","021","022","024","025","028","031","034","066","077","079","081","082","090","092","100","101","114","122","125","126","132","134","137"],

        "Accounting,Business Studies,French" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","114","122","125","126","132","134","137"],

        "Accounting,Business Studies,Information & Communication Technology" : [
            "016","017","018","021","022","024","025","028","031","034","038","066","075","077","079","081","082","090","091","092","096","100","101","109","114","122",
            "125","126","127","131","132","134","137"],

        "Accounting,Agricultural Science,Economics" : [
            "016","017","018","019","021","022","024","025","028","031","034","066","079","081","082","090","092","097","100","101","110","111","112","114","122","125",
            "126","128","131","132","133","134","137"],

        "Accounting,Economics,Geography" : [
            "016","017","018","019","021","022","023","024","025","028","031","034","066","079","081","082","090","092","097","100","101","110","111","112","114","122",
            "125","126","128","131","132","133","134","137"],

        "Accounting,Business Statistics,Economics" : [
            "016","017","018","019","021","022","024","025","028","031","034","066","077","079","081","082","090","091","092","100","101","110","111","112","114","122",
            "125","126","127","128","131","132","133","134","137"],

        "Accounting,Economics,German" : [
            "016","017","018","019","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","110","111","112","114","122","125","126",
            "128","131","132","133","134","137"],
        
        "Accounting,Combined Mathematics,Economics" : [
            "011","016","017","018","019","021","022","023","024","025","026","028","030","031","034","038","066","075","077","079","081","082","090","091","092","096",
            "097","100","101","110","111","112","113","114","122","125","126","128","131","132","133","134","137"],

        "Accounting,Economics,Mathematics" : [
            "016","017","018","019","021","022","024","025","026","028","031","034","079","081","082","091","092","100","101","111","112","114","122","125","126","128",
            "131","132","133","134","137"],

        "Accounting,Economics,History" : [
            "016","017","018","019","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","110","111","112","114","122","125","126",
            "128","131","132","133","134","137"],

        "Accounting,Economics,Political Science" : [
            "016","017","018","019","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","110","111","112","114","122","125","126",
            "128","131","132","133","134","137"],

        "Accounting,Economics,English" : [
            "017","018","019","021","022","024","025","028","029","031","034","066","079","081","082","090","092","100","101","110","111","112","114","122","125","126",
            "128","131","132","133","134","137"],

        "Accounting,Economics,Logic & Scientific Method" : [
           "016","017","018","019","021","022","024","025","028","031","034","066","077","079","081","082","090","092","100","101","110","111","112","114","122","125",
           "126","128","131","132","133","134","137"],

        "Accounting,Economics,French" : [
            "016","017","018","019","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","111","112","114","122","125","126","128",
            "131","132","133","134","137"],

        "Accounting,Economics,Information & Communication Technology" : [
            "016","017","018","019","021","022","024","025","028","031","034","038","066","075","077","079","081","082","090","091","092","096","100","101","109","110",
            "111","112","114","122","125","126","127","128","131","132","133","134","137"],

        "Agricultural Science,Business Studies,Economics" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","097","100","101","114","122","125","126","131","132","134","137"],

        "Business Studies,Economics,Geography" : [
            "016","017","018","021","022","023","024","025","028","031","034","066","079","081","082","090","092","097","100","114","122","125","126","131","132","134","137"],

        "Business Studies,Business Statistics,Economics" : [
            "016","017","018","021","022","024","025","028","031","034","066","077","079","081","082","090","092","100","101","114","122","125","126","127","128","131",
            "132","134","137"],

        "Business Studies,Economics,German" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","114","122","125","126","128","131","132","134","137"],

        "Business Studies,Combined Mathematics,Economics" : [
            "011","016","017","018","021","022","023","024","025","026","028","030","031","034","038","066","075","077","079","081","082","090","092","096","097","100",
            "101","113","114","122","125","126","128","131","132","134","137"],

        "Business Studies,Economics,Mathematics" : [
            "016","017","018","021","022","024","025","026","028","031","034","079","081","082","092","100","101","114","122","125","126","131","132","134","137"],

        "Business Studies,Economics,History" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","114","122","125","126","131","132","134","137"],

        "Business Studies,Economics,Political Science" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101",,"114","122","125","126","131","132","134","137"],

        "Business Studies,Economics,English" : [
            "017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","098","100","101","105","114","122","125","126","128","131","132","134","137"],

        "Business Studies,Economics,Logic & Scientific Method" : [
           "016","017","018","021","022","024","025","028","031","034","066","077","079","081","082","090","092","100","101","114","122","125","126","131","132","134","137"],

        "Business Studies,Economics,French" : [
            "016","017","018","021","022","024","025","028","031","034","066","079","081","082","090","092","100","101","114","122","125","126","131","132","134","137"],

        "Business Studies,Economics,Information & Communication Technology" : [
            "016","017","018","021","022","024","025","028","031","034","038","066","075","077","079","081","082","090","092","096","100","101","109","114","122","125",
            "126","131","132","134","137"],
        
        "Accounting,Business Studies,Physics" : [
            "022","023","024","025","026","030","031","034","038","075","077","079","081","082","091","096","097","100","101","114","125","126","132","134","137"],

        "Accounting,Economics,Physics" : [
            "022","023","024","025","026","030","031","034","038","075","077","079","081","082","091","096","097","100","101","114","125","126","132","134","137"],

        "Business Studies,Economics,Physics" : [
            "022","023","024","025","026","030","031","034","038","075","077","079","081","082","096","097","100","101","114","125","126","132","134","137"],

        //Arts stream valid combinations

        "Economics,Geography,History": [
            "019","020","021","022","023","024","025","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Geography,Home Economics" : [
            "019","020","021","022","023","024","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Agricultural Science,Economics,Geography" : [
            "019","020","021","022","023","024","025","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],
        
        "Economics,Geography,Mathematics" : [
            "019","020","021","022","023","024","025","026","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Combined Mathematics,Economics,Geography" : [
            "019","020","021","022","023","024","025","026","030","031","034","038","041","075","079","081","082","096","097","100","101","111","112","113","114","125",
            "126","128","131","132","134","137"],

        "Communication & Media Studies,Economics,Geography": [
            "019","020","021","022","023","024","025","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Geography,Information & Communication Technology": [
            "019","020","021","022","023","024","025","031","034","038","041","075","079","081","082","096","097","100","101","109","111","112","114","125","126","128",
            "131","132","134","137"],

        "Business Statistics,Economics,Geography": [
            "019","021","022","023","024","025","031","034","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Geography,Political Science": [
            "019","020","021","022","023","024","025","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Geography,Logic & Scientific Method": [
            "019","020","021","022","023","024","025","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Civil Technology,Economics,Geography": [
            "019","020","021","022","023","024","025","031","034","041","079","081","082","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Electrical, Electronic and Information Technology,Geography": [
            "019","020","021","022","024","031","034","041","079","081","082","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Agriculture Technology,Economics,Geography": [
            "019","020","021","022","024","031","034","041","079","081","082","100","101","111","112","114","125","126","128","131","132","134","137"],
        
        "Economics,Geography,Mechanical Technology": [
            "019","020","021","022","024","031","034","041","079","081","082","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Food Technology,Geography": [
            "019","020","021","022","024","031","034","041","079","081","082","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Bio-Resource Technology,Economics,Geography": [
            "019","020","021","022","024","031","034","041","079","081","082","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,History,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Agricultural Science,Economics,History": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        
        "Economics,History,Mathematics": [
            "019","020","021","022","024","025","026","031","034","041","079","081","082","092","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Combined Mathematics,Economics,History": [
            "019","020","021","022","023","024","025","026","031","034","038","041","075","079","081","082","092","096","097","100","101","111","112","113","114","125",
            "126","128","131","132","134","137"],

        "Communication & Media Studies,Economics,History": [
            "019","020","021","022","024","025","026","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,History,Information & Communication Technology": [
            "019","020","021","022","024","025","031","034","038","041","075","079","081","082","092","096","100","101","109","111","112","114","125","126","128","131",
            "132","134","137"],
        
        "Business Statistics,Economics,History": [
            "019","021","022","024","025","031","034","079","081","082","100","101","111","112","114","125","126","128","131","132","133","134","137"],
        
        "Economics,History,Political Science": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,History,Logic & Scientific Method": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],
        
        "Civil Technology,Economics,History": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Electrical, Electronic and Information Technology,History": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Agriculture Technology,Economics,History": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,History,Mechanical Technology": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Food Technology,History": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Bio-Resource Technology,Economics,History": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Agricultural Science,Economics,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Home Economics,Mathematics": [
            "019","020","021","022","024","026","031","034","041","079","081","082","092","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Combined Mathematics,Economics,Home Economics": [
            "019","020","021","022","023","024","026","031","034","038","041","075","079","081","082","092","096","097","100","101","111","112","113","114","125","126",
            "128","131","132","134","137"],

        "Communication & Media Studies,Economics,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Home Economics,Information & Communication Technology": [
            "019","020","021","022","024","031","034","038","041","075","079","081","082","092","096","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Accounting,Economics,Home Economics": [
            "019","021","022","024","031","034","079","081","082","092","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Business Statistics,Economics,Home Economics": [
            "019","021","022","024","031","034","079","081","082","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Home Economics,Political Science": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Home Economics,Logic & Scientific Method": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Civil Technology,Economics,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","100","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Electrical, Electronic and Information Technology,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","097","100","111","112","114","125","126","128","131","132","134","137"],

        "Agricultural Science,Economics,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","097","100","101","111","112","114","125","126","128","131","132","134","137"],
        
        "Economics,Home Economics,Mechanical Technology": [
            "019","020","021","022","024","031","034","041","079","081","082","092","097","100","101","111","112","114","125","126","128","131","132","134","137"],

        "Economics,Food Technology,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","097","100","111","112","114","125","126","128","131","132","134","137"],

        "Bio-Resource Technology,Economics,Home Economics": [
            "019","020","021","022","024","031","034","041","079","081","082","092","097","100","111","112","114","125","126","128","131","132","134","137"],

        "English,Sinhala,Tamil": [
            "019","021","022","024","029","031","034","079","081","082","098","100","105","111","112","114","125","126","128","132","134","137"],

        "Arabic,English,Sinhala": [
            "019","021","022","024","029","031","034","079","081","082","084","098","100","105","111","112","114","125","126","128","132","134","137"],

        "English,Pali,Sinhala": [
            "019","021","022","024","029","031","034","079","081","082","098","100","105","111","112","114","125","126","128","132","134","137"],
        
        "English,Sanskrit,Sinhala": [
            "019","021","022","024","029","031","034","079","081","082","098","100","105","111","112","114","125","126","128","132","134","137"],

        "Arabic,Sinhala,Tamil": [
            "019","021","022","024","029","031","034","079","081","082","084","100","111","112","114","125","126","128","132","134","137"],

        "Pali,Sinhala,Tamil": [
            "019","021","022","024","029","031","034","079","081","082","100","111","112","114","125","126","128","132","134","137"],

        "Sanskrit,Sinhala,Tamil": [
            "019","021","022","024","029","031","034","079","081","082","100","111","112","114","125","126","128","132","134","137"],

        "Arabic,English,Tamil": [
            "019","021","022","024","029","031","034","079","081","082","084","098","100","105","111","112","114","125","126","128","132","134","137"],

        "English,Pali,Tamil": [
            "019","021","022","024","029","031","034","079","081","082","098","100","105","111","112","114","125","126","128","132","134","137"],

        "English,Sanskrit,Tamil": [
            "019","021","022","024","029","031","034","079","081","082","098","100","105","111","112","114","125","126","128","132","134","137"],

        "Buddhism,Geography,History": [
            "019","020","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Buddhism,Geography,Hinduism": [
            "019","021","022","024","025","031","034","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Christianity,Geography,History": [
            "019","020","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Geography,History,Islam": [
            "019","020","022","024","025","031","034","041","063","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Buddhist Civilization,Geography,History": [
            "019","020","022","023","024","025","031","034","041","079","081","082","092","097","100","111","112","114","125","126","128","132","134","137"],

        "Geography,Hindu Civilization,History": [
            "019","020","022","023","024","025","031","034","041","079","081","082","092","097","100","111","112","114","125","126","128","132","134","137"],

        "Christian Civilization	,Geography,History": [
            "019","020","022","023","024","025","031","034","041","079","081","082","092","097","100","111","112","114","125","126","128","132","134","137"],

        "Geography,History,Islamic Civilization": [
            "019","020","022","023","024","025","031","034","041","063","079","081","082","092","097","100","111","112","114","125","126","128","132","134","137"],

        "Geography,Greek & Roman Civilization,History": [
            "019","020","022","023","024","025","031","034","041","079","081","082","092","097","100","111","112","114","125","126","128","132","134","137"],

        "Art,Communication & Media Studies,Dancing-Sinhala": [
            "019","020","021","022","024","031","034","041","069","070","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],
        
        "Art,Communication & Media Studies,Dancing-Baratha": [
            "019","020","021","022","024","031","034","041","070","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],
    
        "Art,Communication & Media Studies,Music-Oriental": [
            "019","020","021","022","024","031","034","041","068","070","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],
    
        "Art,Communication & Media Studies,Music-Carnatic": [
            "019","020","021","022","024","031","034","041","068","070","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],
    
        "Art,Communication & Media Studies,Music-Western": [
            "019","020","021","022","024","031","034","041","068","070","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],
    
        "Art,Communication & Media Studies,Drama & Theatre-Sinhala": [
            "019","020","021","022","024","031","034","041","070","071","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],
    
        "Art,Communication & Media Studies,Drama & Theatre-Tamil": [
            "019","020","021","022","024","031","034","041","070","071","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],
    
        "Art,Communication & Media Studies,Drama & Theatre-English": [
            "019","020","021","022","024","031","034","041","070","071","072","079","081","082","085","100","111","112","114","125","126","128","132","134","137"],

        "Chinese,Economics,French": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Economics,French,German": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],
        
        "Economics,French,Hindi": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Economics,French,Japanese": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Economics,French,Malay": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Economics,French,Russian": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100","111","112","114","125","126","128","132","134","137"],

        "Economics,French,Korean": [
            "019","020","021","022","024","025","031","034","041","079","081","082","092","100",,"112","114","125","126","128","132","134","137"],

        //Biosystems Technology Stream valid combinatios

        "Biosystems Technology (BST),Economics,Science for Technology (SFT)": [
            "022","024","031","034","079","081","082","100","103","114","121","122","123","124","125","126","132","134","137"],

        "Biosystems Technology (BST),Geography,Science for Technology (SFT)": [
            "022","024","031","034","079","081","082","100","101","103","114","121","122","123","124","125","126","132","134","137"],

        "Biosystems Technology (BST),Business Studies,Science for Technology (SFT)": [
            "022","024","031","034","079","081","082","100","101","103","114","121","122","123","124","125","126","132","134","137"],
            
        "Agricultural Science,Biosystems Technology (BST),Science for Technology (SFT)": [
            "022","024","031","034","079","081","082","100","101","103","114","121","122","123","124","125","126","132","134","137"],
            
        "Accountancy,Biosystems Technology (BST),Science for Technology (SFT)": [
            "022","024","031","034","079","081","082","100","101","103","114","121","122","123","124","125","126","132","134","137"],

        "Biosystems Technology (BST),Home Economics,Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","103","114","121","122","123","124","125","126","132","134","137"],

        "Biosystems Technology (BST),Communication and Media Studies,Science for Technology (SFT)": [
            "022","024","031","034","079","081","082","100","103","114","121","122","123","124","125","126","132","134","137"],

        "Biosystems Technology (BST),English,Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","098","100","103","105","114","121","122","123","124","125","126","132","134","137"],

        "Biosystems Technology (BST),Information & Communication Technology,Science for Technology (SFT)" : [
            "022","024","031","038","075","079","081","082","096","100","101","103","104","114","121","122","123","124","125","126","132","134","137"],
        
        "Art,Biosystems Technology (BST),Science for Technology (SFT)" : [
            "022","024","031","034","070","072","079","081","082","085","100","103","114","121","122","123","124","125","126","132","134","137"],
        
        "Biosystems Technology (BST),Mathematics,Science for Technology (SFT)" : [
            "022","024","026","031","034","079","081","082","100","103","114","121","122","123","124","125","126","132","134","137"],

        //Engineering Technology Stream valid combinatios

        "Economics,Engineering Technology (ET),Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Engineering Technology (ET),Geography,Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Engineering Technology (ET),Home Economics,Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Communication and Media Studies,Engineering Technology (ET),Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Business Studies,Engineering Technology (ET),Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Agricultural Science,Engineering Technology (ET),Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Accountancy,Engineering Technology (ET),Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Engineering Technology (ET),English,Science for Technology (SFT)" : [
            "022","024","031","034","079","081","082","098","100","102","105","114","121","122","123","124","125","126","132","134","137"],

        "Engineering Technology (ET),Information & Communication Technology,Science for Technology (SFT)" : [
            "022","024","031","034","038","075","079","081","082","096","100","101","102","114","121","122","123","124","125","126","132","134","137"],

        "Art,Engineering Technology (ET),Science for Technology (SFT)" : [
            "022","024","031","034","070","072","079","081","082","085","100","102","114","121","122","123","124","125","126","132","134","137"],

        "Engineering Technology (ET),Mathematics,Science for Technology (SFT)" : [
            "022","024","026","031","034","079","081","082","100","102","105","114","121","122","123","124","125","126","132","134","137"],
    };

    streamSelector.addEventListener("change", (e) => {
        const selectedStream = e.target.value;

        [subjects1Dropdown, subjects2Dropdown, subjects3Dropdown].forEach(dropdown => {
            dropdown.innerHTML = '<option value="" selected disabled>Select a Subject</option>';
        });
        [subjectsSection1, subjectsSection2, subjectsSection3].forEach(section =>
            section.classList.add("hidden")
        );
        resultSection.classList.add("hidden");
        degreesList.innerHTML = "";

        if (selectedStream && subjects[selectedStream]) {
            [subjectsSection1, subjectsSection2, subjectsSection3].forEach(section =>
                section.classList.remove("hidden")
            );
            checkCombinationButton.classList.remove("hidden");

            subjects[selectedStream].forEach(subject => {
                [subjects1Dropdown, subjects2Dropdown, subjects3Dropdown].forEach(dropdown => {
                    const option = document.createElement("option");
                    option.value = subject;
                    option.textContent = subject;
                    dropdown.appendChild(option);
                });
            });
        } else {
            [subjectsSection1, subjectsSection2, subjectsSection3].forEach(section =>
                section.classList.add("hidden")
            );
        }
    });

    checkCombinationButton.addEventListener("click", () => {
        const selectedSubjects = [
            subjects1Dropdown.value,
            subjects2Dropdown.value,
            subjects3Dropdown.value
        ].sort().join(",");

        degreesList.innerHTML = "";

        if (validSubjectCombinations[selectedSubjects]) {
            validSubjectCombinations[selectedSubjects].forEach(courseCode => {
                // Find the program with the matching course code
                const degrees = Degrees.find(degrees => degrees.code === courseCode);
                const listItem = document.createElement("li");
                if (degrees) {
                    listItem.textContent = degrees.name + " - " + " (" + courseCode + ")";
                } else {
                    listItem.textContent = "Unknown Program (" + courseCode + ")";
                }
                degreesList.appendChild(listItem);
            });
        } else {
            degreesList.innerHTML = "<li>No courses available for this combination.</li>";
        }
        resultSection.classList.remove("hidden");
    });
});

