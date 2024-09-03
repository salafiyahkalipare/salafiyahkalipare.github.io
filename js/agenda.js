$.ajax({
  url : 'https://conn.alisita.my.id/hosting/salafiyahkalipare/public/agenda',
  method : 'post',
  data : {
    'open' : 'agenda'
  },
  beforeSend: function(){$('#show').html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>');},
  success : function(load){$('#show').html(load);}
});
