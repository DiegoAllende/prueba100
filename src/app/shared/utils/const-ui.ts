import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ConstUI {
  //TITULOS
  private static pagos = "Pagos";
  private static transferencias = "Transferencias";
  //CARDS
  private static pagoCreditoOtroBanco = "Pago de tarjetas a otros bancos";
  private static pagoCreditoPropio = "Pago de créditos propios";
  private static pagoCreditoTercero = "Pago de créditos a terceros";
  private static transferenciaCuentaPropia = "A cuentas propias";
  private static transferenciaCuentaTercero = "A cuentas de terceros";
  private static transferenciaDiferido = "Transferencia en diferido";
  private static transferenciaInmediata = "Transferencia inmediata";
  private static ingresaLosDatos = "Ingresa los datos y completa las opciones para continuar";
  private static transferenciaEvioGiro = "Envíos de giros";
  private static pagoLuz = "Pago de luz";
  private static pagoAgua = "Pago de agua";
  private static pagoEmpresaInsitucion = "Pago a empresas e instituciones";
  private static pagoUniversidades = "Pago de universidades";
  //STEPS
  private static registro = "Registro";
  private static confirmacion = "Confirmación";
  private static resumen = "Resumen";
  //LABLES
  private static ctaOrigen = "Cuenta origen";
  private static ctaDestino = "Cuenta destino";
  private static ctaDestinoCCI = "Cuenta destino (CCI)";
  private static bancoDestino = "Banco destino";
  private static numTarjetaCredito = "Nro. de tarjeta de crédito";
  private static credito = "Crédito";
  private static pagoPorCuota = "Pago por cuotas";
  private static pagoParcial = "Pago parcial";
  private static moneda = "Moneda";
  private static monto = "Monto";
  private static montoTransferir = "Monto a transferir";
  private static montoPagar = "Monto a pagar";
  private static tipos = "Tipos";
  private static beneficiario = "Beneficiario";
  private static universidades = "Universidad";
  private static servicio = "Servicio";
  private static codigo = "Código";
  private static estudiante = "Estudiante";
  private static empresaInsitucion = "Empresa o institución";
  private static empresas = "Empresa";
  private static tipoServicio = "Tipo de servicio";
  private static codigoSuministro = "Código de suministro";
  private static titular = "Titular";
  private static cliente = "Cliente";
  private static nombreBeneficiario = "Nombres del beneficiario";
  private static apellidoPatBenef = "Apellido Paterno del beneficiario";
  private static apellidoMatBenef = "Apellido Materno del beneficiario";
  private static docuemntoIdentidad = "Documento de identidad";
  private static numeroDocumento = "Número de documento";
  private static generarCalveGiro = "Generar clave del giro";
  //BOTONES
  private static regresar = "Regresar";
  private static continuar = "Continuar";
  private static irTransferencia = "Ir a transferencias";
  private static irPagos = "Ir a pagos";
  private static pagar = "Pagar";
  private static transferir = "Transferir";
  //MENSAJES
  private static transferenciaExitosa = "¡Tu transferencia se realizó con éxito!";
  private static pagoExitoso = "¡Tu pago se realizó con éxito!";
  private static ingresaClave6D = "Ingresa tu clave de internet de 6 dígitos";
  private static sinCreditosVigentes = "Por ahora no dispones de créditos vigentes";
  private static montoMaximo = "Monto máximo";
  private static msjPagoParcial = "Este pago NO se considerará, como pago anticipado, se realizará cuota por cuota";
  private static msjVerificarDatosBenef = "Por favor verifica que los datos del beneficiario sean correctos";
  private static msjRecodarCompartirClaveGenerada = "Recuerda compartir con el beneficiario la clave generada. Sin ella no se podrá realizar el retiro del dinero.";
  private static msjNumeroReciboGuion = "El número de recibo debe incluir los guiones. Ej: 1-7091567-09";
  private static msjServicioFechaCorte = "Si tu servicio tiene fecha de corte, solo podrás realizar el pago hasta 3 días antes de la fecha de vencimiento. Toma precauciones para evitar el corte de tu servicio";
  //VALIDACIONES
  private static ctaOrigenSinSaldo = "La cuenta origen no posee saldo suficiente para realizar esta transacción";
  private static frTarjCredDigitos = "Debes ingresar todos los digitos de tu CCI";
  private static frCreditoDigitos = "Debes ingresa todos los dígitos del crédito";

  /* CAMBIO CLAVE
    Ingresar datos
    Ingresa tu clave actual
    Ingresa tu nueva clave
    Confirma tu nueva clave
    ¡Cambio de clave exitoso!
    Tu registro se realizó con éxito
    Regresa a tu Home Banking
  */

  /* ENVIO NOTIFICACIONES
    Activar notificaciones
    Desactivar notificaciones
    Medio de notificación
    Seleccionar los canales de notificación
    Referencia en dólares
    Monto base
    Al activar este servicio podrás recibir notificaciones de cada operación que realices por el medio y canales que selecciones.
    Las notificaciones para los canales seleccionados y aquellos que fueron previamente afiliados, serán recibidas por operaciones a partir del monto base

  */

  /* LIMITE OPERACIONES
    Compras por internet
    Monto máximo
    En soles
    En dólares
    APP Movil
    Editar límite
  */

  /* ACTIVAR/DESACTIVAR SMS
    Seleccionar operaciones
    Activar claves para favoritos
    Desactivar claves para favoritos
    Tienes desactivado el uso de claves para realizar operaciones guardadas como favoritos
  */

  /* CAMBIO SELLO
    Cambio de sello de seguridad
    Para  garantizar  que tus operaciones se  realicen con total seguridad debes elegir una de las figuras mostradas como tu sello personal.
  */

  /* BLOQUEO TOTAL TARJETA
    Bloqueo de tarjeta
    ¿Deseas bloquear tu tarjeta de débito?
    Si
    No
    Recuerda que el bloqueo de tarjeta no permitirá realizar transacciones por ningún canal afiliado. La reposición de tarjeta tiene un costo según tarifario.

    Motivo de bloqueo
  */

  /* CONFIGUAR TARJETA
    // BLOQUEO TEMPORAL
    Bloqueo/desbloqueo
    Bloqueo temporal de tarjeta
    Desbloqueo de tarjeta
    Si bloqueas temporalmente tu tarjeta no podrás hacer uso de ella hasta que la habilites
    // COMPRAS POR INTERNET
    Uso por canal
    Compras en comercios (POS) extranjero
    Cajeros automáticos (ATM) extranjero
    Compras por internet
    // USO CANAL POS  Y  ATM
    Seleccionar países
    Fecha ida
    Fecha retorno
    Si vas a viajar al extranjero, debes registrar los países donde vas a hacer uso de la tarjeta
    Ten en cuenta que el roaming de los operadores telefónicos no está activo en algunos países
  */

  /* GENERAL
    Ingresa tu clave SMS
    Enviar SMS nuevamente
    Agregar a favoritos
    Agrega un nombre a la operación
    Ingresa tu clave de internet de 6 dígitos
    Tu número de operación es #123456. Se envió la constancia a tu correo electrónico
    ¡Tu transferencia se realizó con éxito!
    ¡Tu pago se realizó con éxito!
    Ingresa los datos y completa las opciones para continuar
  */

  /* PASO2:
    Banco destino
    Código de suministro
    Código
    Comisión
    Crédito
    Cuenta destino
    Cuenta destino (CCI)
    Cuenta origen
    Empresa
    Empresa o institución
    Estudiante
    Fecha de vencimiento
    Monto a pagar
    Monto a cargar
    Monto a transferir
    Monto total a transferir
    Monto total a pagar
    Mora
    Nro. de crédito
    Nro. de tarjeta de crédito
    Servicio
    Tipo de cambio
    Tipo de transferencia
    Titular
    Titular cuenta de destino
    Titular del crédito
    Titular de la tarjeta
    Universidad
  */

  /* PASO3:
    Banco a transferir
    Banco destino
    Beneficiario
    Comisión
    Código 
    Código de suministro
    Concepto
    Crédito
    Cuenta destino
    Cuenta destino CCI Soles  // verificar la moneda
    Cuenta origen
    Empresa
    Estudiante
    Fecha y hora
    Modalidad
    Monto a cargar
    Monto a enviar
    Monto abonado
    Monto cargado
    Monto pagado
    Mora
    Nro. de crédito
    Nro. de tarjeta de crédito
    Próximo vencimiento
    Servicio
    Tipo de cambio
    Tipo de operación
    Tipo de pago
    Tipo de transferencia
    Titular
    Titular del crédito
    Titular cta. destino
    Titular de la tarjeta
  */

  public static getConstOperaciones() {
    return {
      titulo: {
        pago: this.pagos,
        transf: this.transferencias,
      },
      card: {
        titPagoCrdOtroBanco: this.pagoCreditoOtroBanco,
        titPagoCrdPropio: this.pagoCreditoPropio,
        titPagoCrdTercero: this.pagoCreditoTercero,
        titTransCtaPropia: this.transferenciaCuentaPropia,
        titTransCtaTercero: this.transferenciaCuentaTercero,
        titTransDiferido: this.transferenciaDiferido,
        titTransInmediata: this.transferenciaInmediata,
        subTitOperac: this.ingresaLosDatos,
      },
      steps: {
        desPaso1: this.registro,
        desPaso2: this.confirmacion,
        desPaso3: this.resumen,
        codPaso1: 0,
        codPaso2: 1,
        codPaso3: 2,
      },
      label: {
        bancoDestino: this.bancoDestino,
        beneficiario: this.beneficiario,
        ctaOrigen: this.ctaOrigen,
        ctaDestino: this.ctaDestino,
        ctaDestinoCCI: this.ctaDestinoCCI,
        credito: this.credito,
        moneda: this.moneda,
        montoPago: this.monto,
        montoTransf: this.montoTransferir,
        numTarjCred: this.numTarjetaCredito,
        pagoCuota: this.pagoPorCuota,
        pagoParcial: this.pagoParcial,
        tipos: this.tipos,
      },
      btn: {
        continuar: this.continuar,
        irPagos: this.irPagos,
        irTransf: this.irTransferencia,
        pagar: this.pagar,
        regresar: this.regresar,
        transferir: this.transferir
      },
      msj: {
        clave6D: this.ingresaClave6D,
        montoMax: this.montoMaximo,
        sinCreditoVig: this.sinCreditosVigentes,
        pagoExito: this.pagoExitoso,
        pagoParcial: this.msjPagoParcial,
        transfExito: this.transferenciaExitosa,
      },
      error: {
        creditoDig: this.frCreditoDigitos,
        sinSaldo: this.ctaOrigenSinSaldo,
        tarjCredDig: this.frTarjCredDigitos,
      }
    };
  }
}
