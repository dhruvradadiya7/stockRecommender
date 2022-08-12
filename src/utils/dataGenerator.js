/*
* data generator will take three argumnets stock symbol, timewindow in days
* and a object of service which is selected and deselected by user.
*/
export const dataGenerator = (symbol, days, selectedServices) => {
  if (!symbol || !days) {
    return null;
  }
  const data = [];
  const todaysDate = new Date(new Date().setDate(new Date().getDate() + 1));
  for (var i = 0; i < days; i++) {
    const date = new Date(todaysDate.setDate(todaysDate.getDate() - 1));
    const price = (Math.random() * 1000).toFixed(2);
    const socialMediaCount = Object.values(selectedServices[0]).map((service) =>
      service ? Math.floor(Math.random() * 250) + 1 : 0
    );
    data.push({ date, price, socialMediaCount });
  }
 
  return data;
  
};
