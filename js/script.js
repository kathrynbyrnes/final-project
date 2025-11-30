const { createApp } = Vue

createApp({
    data() {
        return {

            candidates: [
                { id: 1, name: "Salaam Bhatti", website: "https://salaamforva.com/", image: "images/salaambhatti.png", party: "Democrat", funds: "103,673.38", description: "Born to immigrants and raised on Mister Rogers, Sesame Street, public libraries and schools, WIC and free school meals, Salaam knows firsthand how vital community and public service are. From delivering Meals on Wheels with his mom to fighting for basic needs across Virginia, Salaam has spent his life fighting to make government work for the people who need it most." },
                { id: 2, name: "Tim Cywinski", website: "https://www.votetimva.com/", image: "images/timcywinski.png", party: "Democrat", funds: "0.00", description: "Tim Cywinski is a grassroots advocate who’s spent over 15 years fighting for a simple idea: power should come from people, not corporations, not special interests and not bad-faith politicians. Tim refuses big money because he wants voters to know that every policy he supports is grounded in conviction — not influenced by lobbyists or wealthy donors." },
                { id: 3, name: "Jason Knapp", website: "https://www.atlanticcouncil.org/expert/jason-knapp/", image: "images/jasonknapp.webp", party: "Democrat", funds: "0.00", description: "Jason Knapp is a 2024-2025 Veterans Advanced Energy fellow with the Atlantic Council’s Global Energy Center. Knapp is the founder and managing director of Capitol Energy Advocacy, where he works to advance clean energy technologies, strengthen critical mineral supply chains, and promote US manufacturing through strategic government relations. He also serves as an adjunct professor at American University’s School of Public Affairs." },
                { id: 4, name: "Ericka Kopp", website: "https://www.byrnecanaanlaw.com/ericka-w-kopp.html", image: "images/erickakopp.png", party: "Democrat", funds: "1,612.29", description: "Ericka W. Kopp is an attoryney who centers her practice around the defense of health care providers. She is a zealous advocate in the defense of her clients, providing both thorough and thoughtful representation in a client-centered approach." },
                { id: 5, name: "Andrew Lucchetti", website: "https://halperinlegal.com/andrew-lucchetti/", image: "images/andrewlucchetti.png", party: "Democrat", funds: "57,728.39", description: "Mr. Lucchetti brings a blue collar work ethic, significant life experience, and a keen intelligence to his practice at the Halperin Law Center. He is dedicated to his clients and committed to providing them with the most compassionate and qualified representation possible." },
                { id: 6, name: "Amanda Pohl", website: "https://pohlforcongress.com/", image: "images/amanda-pohl.jpg", party: "Democrat", funds: "50,899.71", description: "Virginia’s 1st Congressional District — often called “America’s First District” — has been under GOP control for decades. Rob Wittman has chosen to represent Donald Trump and Elon Musk instead of the people who call this district home. Amanda Pohl is running to change that — and with your help, we can flip this seat and return the voice of Virginia’s 1st to its people." },
                { id: 7, name: "James Shea", website: "https://www.sheaforcongress.com/", image: "images/jamesshea.avif", party: "Democrat", funds: "2,660.00", description: "Raised in a small town, James Shea has dedicated his life to improving society and helping the underserved. From fighting to protect Medicaid benefits for families with disabled children to opposing government overreach, James's career is about serving others." },
                { id: 8, name: "Sean Sublette", website: "https://subletteweather.com/about", image: "images/seansublette.avif", party: "Democrat", funds: "57,059.78", description: "Sean was born and raised in Richmond, Virginia and earned his Bachelor and Master of Science degrees at Penn State in the early 1990s. After 19 years as a broadcast meteorologist in Roanoke and Lynchburg, he worked six years with scientists at Climate Central in Princeton, NJ, before coming home to Richmond in 2021 to work for the parent company of the Richmond Times-Dispatch." },
                { id: 9, name: "Shannon Taylor", website: "https://shannontaylorva.com/", image: "images/shannontaylor.jpg", party: "Democrat", funds: "362,407.92", description: "Shannon Taylor has spent the past 13 years as Henrico County’s top prosecutor protecting families and keeping our streets safe. She’s taken on violent criminals, fraudsters and drug dealers—never backing down from the toughest fights. Now Shannon is running for Congress in Virginia’s 1st District to take on career politician Rob Wittman, who has sold out working families to special interests and the ultra-wealthy. Shannon will fight to lower costs, enforce our laws and protect our healthcare." },
                { id: 10, name: "Melvin Tull", website: "https://meltullforcongress.com/", image: "images/meltull.jpg", party: "Democrat", funds: "92,357.70", description: "I’m Mel Tull. I’m a dad, a veteran, and an experienced business lawyer, and I’m running to unseat Rob Wittman. I took an oath to serve my country, just like Rob. The difference is, I took my oath seriously. I’m ready to do what Rob hasn’t done, stand up and fight for our district. We need leaders in congress who fight for Virginia’s families and local businesses. Leaders who will lower costs for everyone, protect our health care and rights, and put our families first." },
                { id: 11, name: "Lisa Vedernikova Khanna", website: "https://www.lvk.vote/", image: "images/lisavedernikovakhanna.webp", party: "Democrat", funds: "266,010.01", description: "Lisa is a community and business leader. She was raised by a single mom who risked everything to flee Soviet Russia in pursuit of the freedom that only America could provide. Her mom spent years undocumented, building a small business and raising Lisa on her own. In just one generation, Lisa worked her way out of poverty, proving how access to opportunity, hard work, and a strong community can change a life’s trajectory." },
                { id: 12, name: "Robert Wittman", website: "https://wittman.house.gov/", image: "images/robwittman.jpg", party: "Republican", funds: "1,865,127.58", description: "Congressman Rob Wittman was first elected to the United States Congress to serve Virginia’s First Congressional District in 2007. While in office, he has focused on strengthening our military and supporting our nation’s veterans, promoting a flourishing economy through fiscal responsibility and pro-growth policies, fixing our crumbling infrastructure, increasing access to high-speed internet, and promoting workforce development through Career and Technical Education (CTE) and Science, Technology, Engineering, and Math (STEM) programs." }
            ],

            partyFilter: [],

            alphabet: true,
            fundsDown: false,
            fundsUp: false,

            showAll: true,
            showDems: false,
            showReps: false,

            interactiveMap: true,
            staticMap: false,

        }
    },
    methods: {

        filteredCandidates() {
            newCandidates = [...this.candidates];

            if (this.fundsDown) {
                newCandidates = newCandidates.sort((a, b) => {
                    let bfunds = parseFloat(b.funds.replace(/,/g,''));
                    let afunds = parseFloat(a.funds.replace(/,/g,''));
                    console.log("afunds: ", afunds, "bfunds: ", bfunds);
                    // return b.funds - a.funds;
                    return bfunds - afunds;
                });
            }

            if (this.fundsUp) {
                newCandidates = newCandidates.sort((a, b) => {
                    let afunds = parseFloat(a.funds.replace(/,/g,''));
                    let bfunds = parseFloat(b.funds.replace(/,/g,''));
                    console.log("afunds: ", afunds, "bfunds: ", bfunds);
                    // return b.funds - a.funds;
                    return afunds - bfunds;
                    // return a.funds - b.funds;
                });
            }

            if (!this.showAll) {
                if (this.showDems) {
                    newCandidates = newCandidates.filter(item => item.party == 'Democrat');
                } else if (this.showReps) {
                    newCandidates = newCandidates.filter(item => item.party == 'Republican');
                }
            }

            return newCandidates;
        },

        alphabetSort() {
            this.alphabet = true;
            this.fundsDown = false;
            this.fundsUp = false;
        },
      
        fundsDownSort() {
            this.fundsDown = true;
            this.fundsUp = false;
            this.alphabet = false;
        },

        fundsUpSort() {
            this.fundsUp = true;
            this.fundsDown = false;
            this.alphabet = false;
        },

        partyButton(party) {
            if (party == "ALL") {
                this.showAll = true;
                this.showDems = false;
                this.showReps = false;
            } else if (party == "D") {
                this.showDems = true;
                this.showReps = false;
                this.showAll = false;
            } else if (party == "R") {
                this.showReps = true;
                this.showDems = false;
                this.showAll = false;
            }
        },

        mapView(mode) {
            if (mode == 'I') {
                this.interactiveMap = true;
                this.staticMap = false;
            } else {
                this.staticMap = true;
                this.interactiveMap = false;
            }
        }

    }



}).mount('#app')

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
