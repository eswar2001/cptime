const darkTheme = {
  color: {
    'h1': "#bb86fc",
    'h4': "#03dac6",
    'text': "#ffffff",
    'centered': "#121212",
    "cardHeader": "#03dac6"
  },
  backGround: {
    'button': '#bb86fc',
    'card': '#121212'
  }
  , backGroundColor: {
    'body': ' #121212',
    'table': 'black'
  }
}
const lightTheme = {
  color: {
    'h1': "#6200EE",
    'h4': "#bb86fc",
    'text': "black",
    'centered': "white",
    "cardHeader": "#3700B3"
  },
  backGround: {
    'button': '#bb86fc',
    'card': 'white !important'
  }
  , backGroundColor: {
    'body': ' white',
    'table': 'white !important'
  }
}

var currentTheme = lightTheme
Toggle()
function Toggle() {
  if (currentTheme === darkTheme) {
    currentTheme = lightTheme
  } else {
    currentTheme = darkTheme
  }
  var Theme = `
h1 {
    color: ${currentTheme.color['h1']};
  }
  span,
  h3,
  h2,
  h5,
  p,
  button,
  .btn,
  a,
  #menu,
  td,
  .navigation button[aria-expanded="true"],
  iframe,
  li,
  .list-group-item {
    color: ${currentTheme.color['text']} !important;
  }
  h4,
  -webkit-any-Link::selection {
    color: ${currentTheme.color['h4']} !important;
  }
  .centered {
    color: ${currentTheme.color['centered']} !important;
  }
  .card,
  table {
    z-index: 10;
    background-color: ${currentTheme.backGroundColor['table']} !important;
    box-shadow: white !important;
  }
  .card-header,
  th {
    color: ${currentTheme.color['cardHeader']} !important;//
  }
  body,
  html,
  iframe,
  .list-group-item {
    background-color:${currentTheme.backGroundColor['body']} !important;
  }
  
  button,
  .btn {
    background:${currentTheme.backGround['button']};
  }
  .card {
    background:${currentTheme.backGround['card']} !important;
  }
`;
  document.getElementById('dark').innerHTML = '';
  const style = document.createElement('style');
  style.textContent = Theme;
  document.getElementById('dark').append(style);
}

export { Toggle };