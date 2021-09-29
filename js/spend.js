//Classes  spend.js
class SpendItem {
   constructor(name, code, plan, execRub, execPers, frcRub, frcPers, parentSelector) {
      this.name = name;
      this.code = code;
      this.plan = plan;
      this.execRub = execRub;
      this.execPers = execPers;
      this.frcRub = frcRub;
      this.frcPers = frcPers;
      this.parent = document.querySelector(parentSelector);
   }
   render() {
      const element = document.createElement('tr');
      element.innerHTML = `
         <tr>
            <td>${this.name}</td>
            <td>${this.code}</td>
            <td>${this.plan}</td>
            <td>${this.execRub}</td>
            <td>${this.execPers}</td>
            <td class="text-center">${this.frcRub}</td>
            <td class="text-center">${this.frcPers}</td>
         </tr>
      `;
      this.parent.append(element);
   }
}

new SpendItem(
   'ФОТ',
   322,
   23423423,
   23423444,
   'fish',
   'dfdf',
   23423466,
   '#spend tbody'
).render();

new SpendItem(
   'Налог на ФОТ',
   213,
   '84 442 719,20',
   '35 055 340,64',
   '41,51 %',
   '72 891 206,79',
   '86,32 %',
   '#spend tbody'
).render();

new SpendItem(
   'Пособия',
   266,
   23423423,
   23423444,
   'fish',
   'dfdf',
   23423466,
   '#spend tbody'
).render();