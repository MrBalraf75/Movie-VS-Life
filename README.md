#MovieVSLife

Pour ce projet, nous avons décidé d'utiliser le framework Node JS. 

En raison de plusieurs difficultés rencontrées tout au long du projet, nous n'avons pas réussi à produire un code entièrement fonctionel.
Nous avons cependant mis à votre dispositon les extraits de code commencé pour le développement de notre application. Tout document se terminant par BETA indique que c'est une version que nous avons commencé à coder mais qui est non fonctionnel.

Fonctionnement des fichiers et technologies : 

Notre projet se divise en deux parties essentielles, le Server et le Client. 
Dans la partie cliente, nous retrouvons 3 fichiers essentielles dans 3 languages différents. Le CSS pour le style de la page, le HTML pour la structure de la page et le JS qui va nous permettre de lier notre interface avec la connexion à l'API effectuée dans la partie Server.

Pour cette dernière, nous avons tout d'abord le fichier ApiBeta.js qui va s'occuper de connecter le code à l'url de notre api. Il va prendre en paramètre la clef API qui est stockée dans un fichier .env 
On retrouve également le fichier CreateDataBase et DataBaseBeta. Ces fichiers permettent une connexion à la BDD et vont créer une table spécifique pour le stockage des likes nécessaires à l'application.
Pour ce faire vous devrez tout d'abord lancer le fichier CreateDataBase.js avec la commande (node CreateDataBase.js) pour créer une base de données avec une table.

Vous pourrez aussi tester de votre coté les fichiers BETA (DataBaseBeta.js et ApiBeta.js ) en les lançant avec la commande (node [Fichier en question])
Une fois l'un des fichiers lancé, vous pourrez remarquer dans la console où vous avez lancé le fichier qu'il vous affichera les données que l'on attend.
Pour DataBaseBeta, ce fichier nous permet d'effectuer la recherche des données dans la base de données ainsi que la partie insertion ou modification de valeurs (Seulement si le code est modifié).
Enfin pour ApiBeta.js la console montrera tout simplement les films que l'api nous renvoie.

Difficultés et changements possibles :

Nous avons testé le framework Meteor ainsi que le framework Next.js comme vous pourrez voir dans l'historique du gitlab.

Nous sommes finalement revenu sur notre projet initial avec le Node.js.

Nous vous proposons donc une version moins élaborée de notre projet avec nos outils en commentaires.

Certaines de nos fonctions et/ou idées ne sont pas parfaitement fonctionnelles mais nous avons fait le choix de les laisser en commentaire dans le code dans l'hypothèse d'un retour sur ce projet dans un futur proche. En effet, nous pensons qu'à force de perserverance le projet finira par aboutir. 