// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//factory function
function pAequorFactory(number, dnaBaseArray) {
    const specimenObj= {
        specimenNum: number,
        dna: dnaBaseArray,
        mutate() {
            const randIndex = Math.floor(Math.random() * this.dna.length)
            const chosenBase = this.dna[randIndex];
            let baseReplacement = returnRandBase();
            while (baseReplacement === chosenBase) {
                baseReplacement = returnRandBase();
            };
            console.log(chosenBase, baseReplacement);
            this.dna[randIndex] = baseReplacement;
            return this.dna;
        },
        compareDNA(pAequorSpecimen) {
            let identicalBases = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === pAequorSpecimen.dna[i]) {
                    identicalBases += 1;
                }
            }
            const DNAPercentage = (identicalBases * 100) / this.dna.length;
            return `specimen #1 and specimen #2 have ${DNAPercentage}% DNA in common`; 
        },
        willLikelySurvive() {
            let GCOcuurences = 0;
            for (let i = 0; i < this.dna.length; i++) {
               if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    GCOcuurences += 1;
               } 
            }
            const chanceOfSurvival = (GCOcuurences * 100) / this.dna.length; 
            console.log(chanceOfSurvival);
            if (chanceOfSurvival < 60) {
                return false;
            } else {
                return true;
            }
        },
        complementStrand() {
            console.log(`Strand used: ${this.dna}`);
            const complementaryStrand = [];
            for (let base of this.dna)
                switch (base) {
                    case 'A':
                        complementaryStrand.push('T');
                        break;
                    case 'T':
                        complementaryStrand.push('A');
                        break;
                    case 'C':
                        complementaryStrand.push('G');
                        break;
                    case 'G':
                        complementaryStrand.push('C');
                        break;
                    default:
                        console.log('Cannot create a complementary strand on this specimen');
                        break;
                }
            return complementaryStrand;
        }
    };

    return specimenObj;

}

function thrivingSpeciesGenerator(numOfSpeciesDesired) {
    const thrivingSpecies = [];
    let speciesCount = 0;
    while (thrivingSpecies.length < numOfSpeciesDesired) {
        const newSpecie = pAequorFactory(speciesCount++, mockUpStrand());
        const willThrive = newSpecie.willLikelySurvive()
        if (willThrive) {
            thrivingSpecies.push(newSpecie);
        }
    }
    return thrivingSpecies;
}

// const pAequor1 = pAequorFactory(1, mockUpStrand());
// const pAequor2 = pAequorFactory(2, mockUpStrand());

// console.log(pAequor1.dna)
// console.log(pAequor2.dna)
// console.log(pAequor1.compareDNA(pAequor2));
// console.log(pAequor1.willLikelySurvive());

// console.log(thrivingSpeciesGenerator(2));
// console.log(pAequor1.complementStrand());






