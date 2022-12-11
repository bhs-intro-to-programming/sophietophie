// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height;
};
const higherPaid = (employee1, employee2) => {
  if (employee1.salary > employee2.salary) {
    return employee1;
  } else {
    return employee2;
  }
};
const isSamePoint = (p1, p2) => {
  return (p1.x === p2.x) && (p1.y === p2.y);
};
const totalWithTip = (bill, percentageTip) => {
  return {
    subtotal: bill.subtotal, 
    tip: bill.subtotal * percentageTip,
    total: bill.subtotal + (bill.subtotal * percentageTip),
  
  }
}
const isWinner = (obj) => {
  return obj.score > 100;
};
