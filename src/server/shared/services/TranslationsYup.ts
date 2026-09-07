import { setLocale } from "yup";

setLocale({
  mixed: {
    default: "Campo inválido",
    required: "Este campo é obrigatório",
    oneOf: "Deve ser um dos seguintes valores: ${values}",
    notOneOf: "Não pode ser nenhum dos seguintes valores: ${values}",
    defined: "O campo deve estar definido",
  },
  string: {
    length: "Deve ter exatamente ${length} caracteres",
    min: "Deve ter pelo menos ${min} caracteres",
    max: "Deve ter no máximo ${max} caracteres",
    email: "E-mail inválido",
    url: "Deve ser uma URL válida",
    trim: "Não deve conter espaços no início ou no fim",
    lowercase: "Deve estar em letras minúsculas",
    uppercase: "Deve estar em letras maiúsculas",
    datetime: "Deve ser uma data e hora válidas",
  },
  number: {
    min: "Deve ser maior ou igual a ${min}",
    max: "Deve ser menor ou igual a ${max}",
    lessThan: "Deve ser menor que ${less}",
    moreThan: "Deve ser maior que ${more}",
    positive: "Deve ser um número positivo",
    negative: "Deve ser um número negativo",
    integer: "Deve ser um número inteiro",
  },
  date: {
    min: "A data deve ser posterior a ${min}",
    max: "A data deve ser anterior a ${max}",
  },
  boolean: {
    isValue: "Deve ser verdadeiro",
  },
  array: {
    min: "Deve ter pelo menos ${min} itens",
    max: "Deve ter no máximo ${max} itens",
    length: "Deve conter exatamente ${length} itens",
  },
  object: {
    noUnknown: "Não pode conter chaves não especificadas no objeto",
  },
});
