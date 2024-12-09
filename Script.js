
function updateContent(contentId) {
    const content = document.getElementById('content');
    switch(contentId) {
      case 'content1':
        content.innerHTML = '<h1>About us</h1> <h3>This Welcome to Shopify! We are a leading e-commerce platform dedicated to helping entrepreneurs and businesses of all sizes build and grow their online stores. Our mission is to provide easy-to-use tools and resources that empower people to create beautiful, functional, and successful online businesses. .</h3>';
        break;
      case 'content2':
        content.innerHTML = '<h1>Services</h2><p>We Provide large many services like produt listing,payment,Cart option etc.</p> ';
        break;
      case 'content3':
        content.innerHTML = '<h1>Clients</h2><p>We have clients all over india and UK .</p> ';
        break;
        case 'content4':
        content.innerHTML = '<h1>Contacts </h1><p>Email : shopify@gmail.com.</p><p>Contact no : 9084748433';
        break;
        case 'content5':
        content.innerHTML = '<h1>Products</h1><p><ul><li>Smartphones</li><li>Tablets</li><li>Cloths</li><li>Books</></ul></p>';
        break;
        case 'content6':
        content.innerHTML = '<h1>Logged out Successfully !</h1>';
        break;
      default:
        content.innerHTML = '<h1>Welcome to the site!</h1>';
    }
  }
  


  document.getElementById('content1').addEventListener('click', function() {
    updateContent('content1');
  });
  document.getElementById('content2').addEventListener('click', function() {
    updateContent('content2');
  });
  document.getElementById('content3').addEventListener('click', function() {
    updateContent('content3');
  });
  document.getElementById('content4').addEventListener('click', function() {
    updateContent('content4');
  });
  document.getElementById('content5').addEventListener('click', function() {
    updateContent('content5');
  });
  document.getElementById('content6').addEventListener('click', function() {
    updateContent('content6');
  });
  