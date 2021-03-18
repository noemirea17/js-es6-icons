$(document).ready(function () {
  var icons = [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];

  let colors = ["blue", "orange", "purple"];

  let coloredArray = [];

  const square = $(".icons");

  let types = [];

  icons.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });
  console.log(types);

  icons.forEach((element) => {
    const icon = element;
    const indexType = types.indexOf(icon.type);

    icon.color = colors[indexType];
    coloredArray.push(icon.color);
    const { name, prefix, type, family, color } = element;

    const onHtml = `
	<div>
	  	<i class="${family} ${prefix}${name}" style="color: ${color}"></i>
		<p>${name.toUpperCase()}</p>
		  
    </div>
	  `;

    square.append(onHtml);
  });

  console.log(icons);
});
