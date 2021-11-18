Log.patterTitle('Mediator')
/**  Mediator: 
The intent of the Mediator Pattern is to reduce the complexity and dependencies between tightly coupled objects communicating directly with one another. 
This is achieved by creating a mediator object that takes care of the interaction between dependent objects. .*/


class Participant {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  name;
  chatroom;

  send(message, to) {
    this.chatroom.send(message, this, to);
  }
  receive(message, from) {
    console.log(from.name + " to " + this.name + ": " + message);
  }
};


class Chatroom {
  participants = {};

  register(member) {
    this.participants[member.name] = member;
    member.chatroom = this;
  }

  send(message, from, to) {
    if (to) {                      
      // single message
      Log.colorTxt('(single message)')
      to.receive(message, from);
    } else {                       
      // broadcast message
      Log.colorTxt('(broadcast message)')
      for (let key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(' '+message, from);
        }
      }
    }
  }
};


const yoko = new Participant("Yoko");
const john = new Participant("John");
const paul = new Participant("Paul");
const ringo = new Participant("Ringo");
const chatroom = new Chatroom();

chatroom.register(yoko);
chatroom.register(john);
chatroom.register(paul);
chatroom.register(ringo);

yoko.send("All you need is love.");
john.send("Hey, no need to broadcast", yoko);
ringo.send("Paul, what do you think?", paul);