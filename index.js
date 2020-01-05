const title = document.querySelector ('.title');
   title.innerHTML = 'Mechanics';

const subTitle = document.querySelector ('.subTitle');
   subTitle.innerHTML = 'Calc using Tension (V), Resistence (R) and Current (I)';

const tensionLabel = document.querySelector ('#tension');
   tensionLabel.innerHTML = 'Tension (V): ';

const resistenceLabel = document.querySelector ('#resistence');
   resistenceLabel.innerHTML = `Resistence (&#911): `;

const currentLabel = document.querySelector ('#current');
   currentLabel.innerHTML = 'Current (A): ';

const form = document.querySelector ('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputTension = e.target.querySelector ('.tension');
  const inputCurrent = e.target.querySelector ('.current');
  const inputResistence = e.target.querySelector ('.resistence');

  const tension = Number (inputTension.value);
  const current = Number (inputCurrent.value);
  const resistence = Number (inputResistence.value);

   function tensionCalc() {
      const v = resistence * current;

      inputTension.value = parseFloat(v);
   }

   function resistenceCalc() {
      const r = tension / current;

      inputResistence.value = parseFloat(r);
   }

   function currentCalc() {
      const i = tension / resistence;

      inputCurrent.value = parseFloat(i);
   }
   
   if (tension == "") {
      return tensionCalc();

   } else if (resistence == "") {
      return resistenceCalc();

   } else if (current == "") {
      return currentCalc();

   }

   function erase() {
      inputTension.value = '';
      inputResistence.value = '';
      inputCurrent.value = '';
   }
   return erase();
   
  });
