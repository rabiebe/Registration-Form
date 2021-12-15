
//obtenir des valeurs
const formulaire = document.querySelector('#inscription')
const nom = document.querySelector('#name')
const email = document.querySelector('#email')
const motDePasse = document.querySelector('#password')
const motDePasseConfirmation = document.querySelector('#confirmation')
const acceptation = document.querySelector('#acceptation')
let error = false
let messageNom = document.querySelector('#msg-name')
let messageEmail = document.querySelector('#msg-email')
let messagePassword = document.querySelector('#msg-password')
let messageConfirmation = document.querySelector('#msg-confirmation')
let messageCondition = document.querySelector('#msg-condition')
let eye = document.querySelector('#eye')
let eyeSlach = document.querySelector('#eye-slash')
let eyeConfirmation = document.querySelector('#eye-confirmation')
let eyeSlachConfirmation = document.querySelector('#eye-slash-confirmation')
let messagePatternEmailError = document.querySelector('#email-message-errorpattern')
let messageNotMatchError = document.querySelector('#confirmation-message-errorpattern')
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//traitement
formulaire.addEventListener('submit', (event) =>{

    event.preventDefault()

    if(nom.value === ""){
        error = true
        messageNom.hidden = false 
    }
    if(email.value === ""){
        error = true
        messageEmail.hidden = false

    }
    else if(!email.value.match(emailPattern)){
        error = true
        messagePatternEmailError.hidden = false
        messageEmail.hidden = false
    }
    else{
        error = false
        messagePatternEmailError.hidden = true
        messageEmail.hidden = true
    }
    if(motDePasse.value === "" || motDePasse.value.length < 4 || motDePasse.value.length > 6){
        error = true
        messagePassword.hidden = false
        eye.hidden = true
        eyeSlach.hidden = true
    }
    if(motDePasseConfirmation.value === ""){
        error = true
        eyeConfirmation.hidden = true
        eyeSlachConfirmation.hidden = true
        messageConfirmation.hidden = false
    }
    if(motDePasse.value !== motDePasseConfirmation.value){
        error = true
        messageNotMatchError.hidden = false
    }
    if(acceptation.checked === false){
        error = true
        messageCondition.hidden = false
    }
    if(error === false){
        messageNotMatchError.hidden = true
        messageEmail.hidden = true
        formulaire.submit()
    }
})


//supprimer le message lorsque vous cliquez dans le texte du champ
isFocusTextField(nom, messageNom)
isFocusTextField(email, messageEmail)
isFocusTextField(motDePasse, messagePassword)
isFocusTextField(motDePasseConfirmation, messageConfirmation)

function isFocusTextField(textField, message){
    textField.addEventListener('focus', (event)=>{
        event.preventDefault()
        message.hidden = true
        if(textField == motDePasse)
            eye.hidden = false
        if(textField == motDePasseConfirmation)
            eyeConfirmation.hidden = false
    })
}

//Basculer la visibilité du mot de passe
togglePassword(eye, eyeSlach, 'text', motDePasse)
togglePassword(eyeSlach, eye, 'password', motDePasse)
togglePassword(eyeConfirmation, eyeSlachConfirmation, 'text', motDePasseConfirmation)
togglePassword(eyeSlachConfirmation, eyeConfirmation, 'password', motDePasseConfirmation)

function togglePassword(iconA, iconB, typeValue, textField){
    iconA.addEventListener('click', (event)=>{
        event.preventDefault()
        iconA.hidden = true
        iconB.hidden = false
        textField.type = typeValue
    })
}

