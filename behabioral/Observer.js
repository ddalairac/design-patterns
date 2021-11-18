Log.patterTitle('Observer')
/** Observer: 
The Observer is a design pattern in which an object (known as a subject) maintains a list of objects depending on it (observers), 
automatically notifying them of any changes to state
 */
class Subject {
  observers = [];

  subscribeObserver(observer) {
    this.observers.push(observer);
  }
  unsubscribeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObserver(observer) {
    Log.colorTxt('notifyObserver')
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers[index].notify(index);
    }
  }
  notifyAllObservers() {
    Log.colorTxt('notifyAllObservers')
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].notify(i);
    };
  }
};

class Observer {
  notify(index) {
    console.log(" Observer " + index + " is notified!");
  }
}

const subject = new Subject();

const observer0 = new Observer();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.subscribeObserver(observer0);
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);

subject.notifyObserver(observer2);
// Observer 2 is notified!

subject.notifyAllObservers();
// Observer 0 is notified!
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!


