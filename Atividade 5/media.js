 var nome = prompt("Nome de Aluno: ")
        var nota1= prompt("Digite a nota 1: ");
        var nota2 = prompt("Digite a nota 2: ");
          var nota3 = prompt("Digite a nota 3:  ");
       
        var media = (parseFloat(nota1)+ parseFloat(nota2) + parseFloat(nota3)) /3 ;
        
        alert( "Nome: "+ nome + "\n nota 1: " 
              + nota1+ " \n Nota2: "+ nota2+ "\n nota3: "+ nota3 + "\n media: "+ media ); 
        