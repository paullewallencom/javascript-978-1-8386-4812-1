const Officer = function(name, rank, posting) {
  this.name = name
  this.rank = rank
  this.posting = posting
  this.sayHello = () => {
    console.log(this.name)
  }
}

const Riker = new Officer("Will Riker", "Commander", "U.S.S. Enterprise")

Riker.sayHello()
