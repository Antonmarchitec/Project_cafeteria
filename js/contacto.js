(function(){
    const form = document.getElementById('pedidoForm');
    const successBox = document.getElementById('successBox');

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const producto = document.getElementById('producto');
    const cantidad = document.getElementById('cantidad');
    const fecha = document.getElementById('fecha');

    const eNombre = document.getElementById('error-nombre');
    const eEmail  = document.getElementById('error-email');
    const eTel    = document.getElementById('error-tel');
    const eProd   = document.getElementById('error-producto');
    const eCant   = document.getElementById('error-cantidad');
    const eFecha  = document.getElementById('error-fecha');

    const resetBtn = document.getElementById('resetBtn');

    // util: valida email con HTML5 pattern (simple)
    function validEmail(v){
      if(!v) return false;
      // simple regex: contiene @ y dominio
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
    }

    function validPhone(v){
      if(!v) return false;
      // acepta dígitos, espacios, +, guiones. Debe tener 7+ dígitos
      const digits = v.replace(/[^\d]/g, '');
      return digits.length >= 7 && /^[\d+\s\-\(\)]+$/.test(v.trim());
    }

    function clearErrors(){
      [eNombre, eEmail, eTel, eProd, eCant, eFecha].forEach(el => el.textContent = '');
      successBox.style.display = 'none';
    }

    // fecha mínima: hoy
    function isDateValid(dateStr){
      if(!dateStr) return false;
      const chosen = new Date(dateStr + 'T00:00:00');
      const today = new Date();
      // normalizar: comparar solo fecha
      today.setHours(0,0,0,0);
      return chosen >= today;
    }

    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      clearErrors();
      let ok = true;

      // Nombre
      if(!nombre.value || nombre.value.trim().length < 2){
        eNombre.textContent = 'Ingrese su nombre (mín. 2 caracteres).';
        ok = false;
      }

      // Contacto: al menos email o teléfono válido
      const emailVal = email.value.trim();
      const telVal = telefono.value.trim();
      const emailOk = validEmail(emailVal);
      const telOk = validPhone(telVal);

      if(!emailOk && !telOk){
        eEmail.textContent = emailVal ? 'Correo inválido.' : '';
        eTel.textContent = telVal ? 'Teléfono inválido.' : '';
        if(!emailVal && !telVal){
          eEmail.textContent = 'Proporcione correo o teléfono.';
        }
        ok = false;
      }

      // Producto
      if(!producto.value){
        eProd.textContent = 'Selecciona un producto.';
        ok = false;
      }

      // Cantidad
      const q = Number(cantidad.value);
      if(!q || q < 1){
        eCant.textContent = 'La cantidad debe ser al menos 1.';
        ok = false;
      }

      // Fecha
      if(!isDateValid(fecha.value)){
        eFecha.textContent = 'Selecciona una fecha válida (hoy o posterior).';
        ok = false;
      }

      if(!ok) {
        // enfocamos el primer error visible
        const firstErr = document.querySelector('.error-msg:not(:empty)');
        if(firstErr){
          const input = firstErr.previousElementSibling;
          if(input) input.focus();
        }
        return;
      }

      // Si pasa validaciones: mostrar mensaje de éxito (simulación envío)
      successBox.textContent = '✅ Pedido validado. Enviando pedido...';
      successBox.style.display = 'block';

      // Simular envío (aquí pondrías fetch/ajax)
      setTimeout(()=>{
        successBox.textContent = '🎉 Pedido enviado con éxito. Nos pondremos en contacto pronto.';
        // Opcional: resetear form
        // form.reset();
      }, 900);

    });

    resetBtn.addEventListener('click', function(){
      form.reset();
      clearErrors();
    });

    // Mejora UX: validar en blur
    [nombre, email, telefono, producto, cantidad, fecha].forEach(el=>{
      el.addEventListener('blur', ()=> {
        clearErrors();
      });
    });

    // fijar fecha mínima hoy en el input date (visual)
    (function setMinDate(){
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth()+1).padStart(2,'0');
      const dd = String(today.getDate()).padStart(2,'0');
      fecha.setAttribute('min', `${yyyy}-${mm}-${dd}`);
    })();

  })();