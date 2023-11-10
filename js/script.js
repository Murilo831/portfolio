function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("overlay").style.display = "none";
}

/* Gera o texto automatico */

document.addEventListener("DOMContentLoaded", function() {
  var codeElement = document.getElementById('code');
  if (!codeElement) return; // Se o elemento não existir, saia da função

  var codes = [
    `// Desenvolvimento Web
    from django.http import HttpResponse

    def home(request):
        return HttpResponse("Olá, mundo do Django!")`,

        `# Data Science com Pandas
    import pandas as pd

    # Carregando e exibindo os primeiros dados do dataset
    df = pd.read_csv('data.csv')
    print(df.head())`,

        `# Machine Learning com scikit-learn
    from sklearn.datasets import load_iris
    from sklearn.tree import DecisionTreeClassifier

    # Carregando o dataset Iris e criando o modelo
    iris = load_iris()
    X, y = iris.data, iris.target
    clf = DecisionTreeClassifier()
    clf.fit(X, y)

    # Fazendo uma previsão
    print(clf.predict([X[0]]))`,

        `# NLP com NLTK - Automação
    import nltk
    from nltk.tokenize import word_tokenize

    # Exemplo de tokenização de palavras
    frase = "Olá, mundo do NLP!"
    tokens = word_tokenize(frase)
    print(tokens)`,

        `// Desenvolvimento Mobile
    import android.os.Bundle
    import androidx.appcompat.app.AppCompatActivity
    import android.widget.TextView

    class MainActivity : AppCompatActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)

            val textView = findViewById<TextView>(R.id.text_view)
            textView.text = "Olá, mundo do Kotlin!"
        }
    }`
];

  var current = 0;
  var i = 0;
  var speed = 30; // Velocidade de digitação em milissegundos

  function typeCode() {
      if (i < codes[current].length) {
          codeElement.innerHTML += codes[current].charAt(i);
          i++;
          setTimeout(typeCode, speed);
      } else {
          setTimeout(nextCode, 3000); // Espera 3 segundos antes de mudar para o próximo código
      }
  }

  function nextCode() {
      current = (current + 1) % codes.length; // Move para o próximo código ou volta ao primeiro
      codeElement.innerHTML = ''; // Limpa o container de código
      i = 0; // Reinicia o índice para o novo código
      typeCode(); // Começa a digitar o novo código
  }

  typeCode(); // Inicia a digitação do primeiro código
});


/*
 JS to toggle scroll axis styles
*/
const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});




