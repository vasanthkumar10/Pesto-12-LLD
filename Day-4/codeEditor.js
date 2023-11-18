// Memento Pattern

// Originator -> the provider or playground
class TextFile {
  constructor() {
    this.content = "";
  }

  getContent() {
    return this.content;
  }

  setContent(newContent) {
    this.content = newContent;
  }

  createMemento() {
    return new Memento(this.content);
  }

  // restore content
  restore(memento) {
    this.content = memento.getState();
  }
}

// Memento -> represents the snapshot of particular instance
class Memento {
  constructor(content) {
    this.state = content;
  }

  getState() {
    return this.state;
  }
}

// CareTaker -> manage the undo and redo ops
class CodeEditor {
  constructor() {
    this.history = [new Memento("")];
    this.currentIndex = 0;
  }

  save(file) {
    const memento = file.createMemento();
    this.history.push(memento);
    this.currentIndex++;
  }

  undo(file) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const currentSnapshot = this.history[this.currentIndex];
      file.restore(currentSnapshot);
    }
  }

  redo(file) {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      this.currentSnapshot = this.history[this.currentIndex];
      file.restore(this.currentSnapshot);
    }
  }
}

const file = new TextFile();
const VSCode = new CodeEditor();
file.setContent("a");
VSCode.save(file);
// console.log(file);
file.setContent("ab");
// console.log(file);

VSCode.save(file);
file.setContent("abc");
VSCode.save(file);
file.setContent("abcd");
VSCode.save(file);
// console.log(VSCode);
console.log(file.getContent());

// console.log("undo", "=".repeat(50));
// VSCode.undo(file);
// console.log(VSCode);
console.log("undo", "=".repeat(50));
VSCode.undo(file);
console.log(file.getContent());
console.log("undo", "=".repeat(50));
VSCode.undo(file);
console.log(file.getContent());
console.log("undo", "=".repeat(50));
VSCode.undo(file);
console.log(file.getContent());
// console.log(VSCode);

console.log("redo", "=".repeat(50));
VSCode.redo(file);
console.log(file.getContent());
console.log("redo", "=".repeat(50));
VSCode.redo(file);
console.log(file.getContent());
console.log("redo", "=".repeat(50));
VSCode.redo(file);
