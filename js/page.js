function getUrlVars(param=null)
  {
    if(param !== null)
    {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars[param];
    } 
    else 
    {
      return null;
    }
  }

  var buka = getUrlVars("open");
  
$.ajax({
  url : 'https://conn.alisita.my.id/hosting/salafiyahkalipare/public/page/'+buka,
  method : 'post',
  data : {
    'open' : buka
  },
  beforeSend: function(){$('#show').html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>');},
  success : function(load){$('#show').html(load);}
});
