export function countYears(year) {
  return new Date().getFullYear() - year;
}

export function brandPrice(brand) {
  let increase;

  switch (brand) {
    case "europeo":
      increase = 1.3;
      break;
    case "americano":
      increase = 1.15;
      break;
    case "asiatico":
      increase = 1.05;
      break;
  }

  return increase;
}

export function planPrice(plan) {
  let increase;

  switch (plan) {
    case "completo":
      increase = 1.5;
      break;
    case "basico":
      increase = 1.2;
      break;
  }

  return increase;
}
