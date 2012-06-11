  <script type="text/javascript">

    $(function() {
    var availableTags = [
      "Semáforo sin servicio",
      "Oficina de Gobierno",
      "Accidente Natural",
      "Transito",
      "Servicio Público de luz",
      "Servicio de Agua",
      "Choque automovilistico",
      "Transporte público",
      "Volcadura de auto",
      "Bache",
      "Servicio de recolección",
      "Hospitales o clinicas"
     
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

      $( "#datepicker" ).datepicker({
      showButtonPanel: true,

    });

        $( "#datepicker1" ).datepicker({
      showButtonPanel: true,

    });

        $( "#datepicker2" ).datepicker({
      showButtonPanel: true,

    });

        $( "#datepicker3" ).datepicker({
      showButtonPanel: true,

    });

        $( "#datepicker4" ).datepicker({
      showButtonPanel: true,

    });

     
     
  });
  </script>

  <script>
  $(function() {
    $( ".column" ).sortable({
      connectWith: ".column"
    });

    $( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick'></span>")
        .end()
      .find( ".portlet-content" );

    $( ".portlet-header .ui-icon" ).click(function() {
      $( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
      $( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
    });

    $( ".column" ).disableSelection();
  });
  </script>

  <script>
  $(".citizen").ellipsis({visible: 24, more: '...'})

  </script>

  <script type="text/javascript">
  $('#myModal').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  })

</script>

<script>
  $(function () {
    $('#myTab').tab('show');
  })
</script>