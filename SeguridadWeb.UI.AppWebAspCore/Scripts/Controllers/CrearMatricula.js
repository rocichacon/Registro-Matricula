﻿$(document).ready(function () {

    $("#btnBuscar").prop("disabled", true);
    //validamos el formulario
    $("#formdata").validate({
        rules: {
            //DATOS DEL ALUMNO
            alumnonie: "required",
            alumnonombres: "required",
            alumnoapellidos: "required",           
            alumnociudad: "required",
            alumnodireccion: "required",
            //DATOS DEL APODERADO
            apoderadodui: "required",
            apoderadonombres: "required",
            apoderadoapellidos: "required",
            apoderadociudad: "required",
            apoderadodireccion: "required",

        },
        messages: {
            //DATOS DEL ALUMNO
            alumnonie: "Ingresar documneto identidad",
            alumnonombres: "Ingresar nombres",
            alumnoapellidos: "Ingresar apellidos",
            alumnociudad: "Ingresar ciudad",
            alumnodireccion: "Ingresar direccion",
            //DATOS DEL APODERADO
            apoderadodui: "Ingresar documento identidad",
            apoderadonombres: "Ingresar nombres",
            apoderadoapellidos: "Ingresar apellidos",
            apoderadociudad: "Ingresar ciudad",
            apoderadodireccion: "Ingresar direccion",
        }
    });

    //var d = new Date();

    //$('#txtalumnofechanacimiento').datepicker({
    //    changeMonth: true,
    //    changeYear: true,
    //    yearRange: '1900:' + d.getFullYear().toString(),
    //});

    //$('#txtapoderadofechanacimiento').datepicker({
    //    changeMonth: true,
    //    changeYear: true,
    //    yearRange: '1900:' + d.getFullYear().toString(),
    //});


  //  $("#Ventana1").show();
    $("#Ventana2").show();


   

})





//function listarGradosPorNivel() {

//    var IdNivel = parseInt($("#cbonivelacademico").val());

//    jQuery.ajax({
//        url: $.MisUrls.url.UrlGeGradosxNivel + "?idnivel=" + IdNivel,
//        type: "GET",
//        dataType: "json",
//        contentType: "application/json; charset=utf-8",
//        success: function (data) {

//            $("#cbogradoseccion").html("");
//            if (data != null) {

//                $.each(data, function (i, item) {
//                    var value = item.oGradoSeccion
//                    $("<option>").attr({ "value": value.IdGradoSeccion }).text(value.DescripcionGrado + " - " + value.DescripcionSeccion).appendTo("#cbogradoseccion");
//                })

//                $("#cbogradoseccion").val($("#cbogradoseccion option:first").val());

//            }

//        },
//        error: function (error) {
//            console.log(error)
//        },
//        beforeSend: function () {

//        },
//    });

//}


function registrar() {

    if (!$("#formdata").valid())
        return;

    var request = "";

    request = request + "<DATA>";
    request = request + "<ACADEMICO>" +
        "<situacion>" + $("#cbosituacionalumno").val() + "</situacion>" +
        "<idperiodo>" + $("#txtidperiodo").val() + "</idperiodo>" +
        "<idnivel>" + $("#cbonivelacademico").val() + "</idnivel>" +
        "<idgradoseccion>" + $("#cbogradoseccion").val() + "</idgradoseccion>" +
        "<institucionprocedencia>" + $("#txtinstitutoprocedencia").val() + "</institucionprocedencia>" +
        "<esrepitente>" + $("#cboesrepitente").val() + "</esrepitente>";
    request = request + "</ACADEMICO>";


    request = request + "<ALUMNO>" +
        "<idalumno>" + $("#txtidalumno").val() + "</idalumno>" +
        "<documentoidentidad>" + $("#txtalumnodocumentoidentidad").val() + "</documentoidentidad>" +
        "<nombres>" + $("#txtalumnonombres").val() + "</nombres>" +
        "<apellidos>" + $("#txtalumnoapellidos").val() + "</apellidos>" +
        "<fechanacimiento>" + $("#txtalumnofechanacimiento").val() + "</fechanacimiento>" +
        "<sexo>" + $("#cboalumnosexo").val() + "</sexo>" +
        "<ciudad>" + $("#txtalumnociudad").val() + "</ciudad>" +
        "<direccion>" + $("#txtalumnodireccion").val() + "</direccion>";
    request = request + "</ALUMNO>";

    request = request + "<APODERADO>" +
        "<tiporelacion>" + $("#cboapoderadotiporelacion").val() + "</tiporelacion>" +
        "<documentoidentidad>" + $("#txtapoderadodocumentoidentidad").val() + "</documentoidentidad>" +
        "<nombres>" + $("#txtapoderadonombres").val() + "</nombres>" +
        "<apellidos>" + $("#txtapoderadoapellidos").val() + "</apellidos>" +
        "<fechanacimiento>" + $("#txtapoderadofechanacimiento").val() + "</fechanacimiento>" +
        "<sexo>" + $("#cboapoderadosexo").val() + "</sexo>" +
        "<estadocivil>" + $("#cboapoderadoestadocivil").val() + "</estadocivil>" +
        "<ciudad>" + $("#txtapoderadociudad").val() + "</ciudad>" +
        "<direccion>" + $("#txtapoderadodireccion").val() + "</direccion>";
    request = request + "</APODERADO>";
    request = request + "</DATA>";



    jQuery.ajax({
        url: $.MisUrls.url.UrlPostRegistrarMatricula,
        type: "POST",
        data: JSON.stringify({ requestXML: request }),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            if (data.resultado) {
                limpiarTodo();
                salir();
                swal("Mensaje", "Matricula registrada", "success")
            } else {

                swal("Mensaje", "No se pudo registrar", "warning")
            }
        },
        error: function (error) {
            console.log(error)
        },
        beforeSend: function () {

        },
    });
}



//$("#cbosituacionalumno").change(function () {

//    if ($("#cbosituacionalumno").val() == "Antiguo")
//        $("#btnBuscar").prop("disabled", false);
//    else
//        $("#btnBuscar").prop("disabled", true);
//})


//$("#cbonivelacademico").change(function () {
//    listarGradosPorNivel();
//    $("#txtcantidadvacantes").val("");
//})


//$("#cbogradoseccion").change(function () {
//    $("#txtcantidadvacantes").val("");
//})


//function continuar() {

//    if ($("#txtcantidadvacantes").val().trim() == "") {
//        swal("Mensaje", "No existe vacantes", "warning")
//        return;
//    }

//    if (parseInt($("#txtcantidadvacantes").val().trim()) < 1) {
//        swal("Mensaje", "No existe vacantes", "warning")
//        return;
//    }


//    $("#txtnivelacademico").val($("#cbonivelacademico option:selected").text());
//    $("#txtgradoseccion").val($("#cbogradoseccion option:selected").text());


//    $("#Ventana1").hide();
//    $("#Ventana2").show("slow");
//}

//function salir() {

//    $("#txtcantidadvacantes").val("");

//    $("#Ventana2").hide();
//    $("#Ventana1").show("slow");
//}

function buscarAlumno() {

    if ($.fn.DataTable.isDataTable('#tbModal')) {
        $('#tbModal').DataTable().destroy();
    }
    $('#tbModal tbody').html("");

    var table = $('#tbModal').DataTable({
        "ajax": {
            "url": $.MisUrls.url.UrlGetAlumnos,
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            {
                "data": "idAlumno", "render": function (data, type, row, meta) {
                    return "<button class='btn btn-primary btn-sm' type='button' onclick='Seleccionar(" + JSON.stringify(row) + ")'><i class='fa fa-check'></i></button>"
                },
                "orderable": false,
                "searchable": false,
                "width": "150px"
            },
            { "data": "Codigo" },
            { "data": "Nombres" },
            { "data": "Apellidos" },
            { "data": "DocumentoIdentidad" }
        ],
        "language": {
            "url": $.MisUrls.url.Url_datatable_spanish
        }

    },);

    $('#modalReferencia').modal('show');
}

function Seleccionar(json) {

    $("#txtid").val(json.idAlumno);
    $("#txtidalumno").val(json.idAlumno);

    //$("#txtalumnodocumentoidentidad").val(json.DocumentoIdentidad);
    $("#txtalumnonie").val(json.nie);
    $("#txtalumnonombres").val(json.nombre);
    $("#txtalumnoapellidos").val(json.apellido);
    $("#txtalumnofechanacimiento").val(ObtenerFormatoFecha(json.FechaNacimiento));
   // $("#cboalumnosexo").val(json.Sexo);
    //$("#txtalumnociudad").val(json.Ciudad);
    $("#txtalumnodireccion").val(json.Direccion);

  //  $("#txtalumnodocumentoidentidad").prop("disabled", true);
    $("txtalumnonie").prop("disabled", true);
    $("#txtalumnonombres").prop("disabled", true);
    $("#txtalumnoapellidos").prop("disabled", true);
    $("#txtalumnofechanacimiento").prop("disabled", true);
   // $("#cboalumnosexo").prop("disabled", true);
    //$("#txtalumnociudad").prop("disabled", true);
    $("#txtalumnodireccion").prop("disabled", true);


    $('#modalReferencia').modal('hide');
}

function limpiarAlumno() {
    $("#txtid").val("0");

    $("#txtalumnonie").val("");
    $("#txtalumnonombres").val("");
    $("#txtalumnoapellidos").val("");
    $("#txtalumnofechanacimiento").val("");
    $("#cboalumnosexo").val("Masculino");
    $("#txtalumnociudad").val("");
    $("#txtalumnodireccion").val("");


    $("#txtalumnonie").prop("disabled", false);;
    $("#txtalumnonombres").prop("disabled", false);
    $("#txtalumnoapellidos").prop("disabled", false);
    $("#txtalumnofechanacimiento").prop("disabled", false);
    $("#cboalumnosexo").prop("disabled", false);
    $("#txtalumnociudad").prop("disabled", false);
    $("#txtalumnodireccion").prop("disabled", false);

}

function limpiarTodo() {

    $("#cbosituacionalumno").val("Nuevo");
    $("#txtinstitutoprocedencia").val("")
    $("#cboesrepitente").val("NO")

    $("#txtidalumno").val("0");

    $("#txtalumnodocumentoidentidad").val("");
    $("#txtalumnonombres").val("");
    $("#txtalumnoapellidos").val("");
    $("#txtalumnofechanacimiento").val("");
    $("#cboalumnosexo").val("Masculino");
    $("#txtalumnociudad").val("");
    $("#txtalumnodireccion").val("");

    $("#cboapoderadotiporelacion").val($("#cboapoderadotiporelacion option:first").val());
    $("#txtapoderadodocumentoidentidad").val("");
    $("#txtapoderadonombres").val("");
    $("#txtapoderadoapellidos").val("");
    $("#txtapoderadofechanacimiento").val("")
    $("#cboapoderadosexo").val($("#cboapoderadosexo option:first").val());
    $("#cboapoderadoestadocivil").val($("#cboapoderadoestadocivil option:first").val());
    $("#txtapoderadociudad").val("");
    $("#txtapoderadodireccion").val("");
}

function ObtenerFormatoFecha(datetime) {

    var re = /-?\d+/;
    var m = re.exec(datetime);
    var d = new Date(parseInt(m[0]))


    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = (('' + day).length < 2 ? '0' : '') + day + '-' + (('' + month).length < 2 ? '0' : '') + month + '-' + d.getFullYear();

    return output;
}