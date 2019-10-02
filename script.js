var items = ['item 1', 'item 2', 'item3', 'item 4'];

var list = document.querySelector('#myList');




items.forEach(function(item){
   
CreateItem(item); /*createItem fonksiyonuyla hem ilk başta hazırladığımız items dizisindeki elemanları hem de sonradan eklediğimiz elemanları listemizin içinew alıp ekranda gösterebiliyoruz hem de x ya tıklayarak silebiliyoruz.*/




});





    



list.addEventListener('click',function(item){
    
    /*daha önceden style.cs dosyamızda tanımladığımız checked sınıfını kullanacağız. oluşturduğumuz her bir liste elemanına tıkladığımızda farklı bir olay olsun. */
    /*item ın gerçekten bir li listesine eşit olup olmadığını sorgulamamız gerekiyor*/
    
    if(item.target.tagName='LI'){ /*eğer küçük 'li' şeklinde yazsaydık li etiketinin içinde ne varsa yani sapan elemanına
    da 'checked' sınıfı eklerdi. sadece li elemanına eklemek için LI yazıyoruz.*/
       item.target.classList.toggle('checked'); /*item nesnesi seçildiyse daha önceden siler yoksa ekler*/ 
        ToogleDeleteButton(); /*ToogleDeleteAll fonksiyonunu çağırıyoruz*/
    }


});

/*deleteAll butonuna tıkladığımzda li elemanlarını silmesi için gereknler. deleteAll butonunu seçip bir onclick olayı gerçekleştiriyoruz. forEach döngüsünde style.display özellğini none diyerek görünmez yapıyoruz*/
document.querySelector('#deleteAll').onclick=function(){
    var elements = document.querySelectorAll('.checked');
    elements.forEach(function(item){
      item.style.display='none';  
    });
}


 
function ToogleDeleteButton(){
   /*
 birden fazla li elemanına click olayı gerçekleştirdiğimizde her birini
 üstü çizili rengi değişmiş oluyor ve sağ tarafında silmek için x butonu oluşuyor. Birden fazla li seçildiğinde her birini tek tek silmek yerine 'delete all' butonu belirsin ve hepsini aynı anda silelim. li etiketlerine verdiğimiz 'checked' sınıfının sayısını bulup 
 1 den büyük olup olmadığını sorgulamamız gerekiyor.
 
 */
    var checkList = document.querySelectorAll('.list-group-item.checked'); /*Normalde ()içine sadece.checked yazabilirdik fakat bu şekilde tam konum vermiş oluyoruz. list-group-item sınıfının içindeki checked sınıfını seçiyoruz*/
    if(checkList.length>0){
        document.querySelector('#deleteAll').classList.remove('d-none');/*Eğer checked sınıfı uzunluğu 0 dan büyükse yani li elemanına tıklamışsak deleteAll butonu görünür hale getiriyoruz. Yani burada d-none sınıfını classList.Remove ile kaldırıp görünür yaptık.*/
    }else{
        document.querySelector('#deleteAll').classList.add('d-none'); /*Eğer tam aksi durum hiç checked sınıflı li elemanı seçili değilse classList.add ile d-none sınıfını eklemiş oluyoruz. Yani buton görünmez oluyor*/
    }
    
    
}

/*text kutusuna yazılan elemanı add tuşuna tıkladığımızda input ile listeye ekleyeceğiz.

add tıkladığımızda onclick olayı gerçekleşmesi gerek. bu yüzden Add butonuna index.html de id değeri veriyoruz.
id="btnCreate". input da zaten id değeri vardı "txtItem" 

not: onclick yerine addeventlistener kullanabilirdik.*/
 
document.querySelector('#btnCreate').onclick=function(){
   
    var item = document.querySelector('#txtItem').value;/*inputa girilen değeri bu şekilde alıyoruz.*/
    
    if(item===''){ /*bu sorguda girdiğimiz değer bir boşluğa eşitse ekranda alert kutusu gösteriyoruz. Eğer boşluğa eşitse return la programı kesiyoruz.*/
        alert('lütfen bir değer giriniz');
        return;
    }
    
    CreateItem(item); /*aşağıda oluşturduğumuz createitem fonksiyonunu çağırıyoruz*/
    
};

function CreateItem(item){
    
     var li =document.createElement('li'); /*createElement metodu kullanıyoruz. bununla oluşturmak istediğimiz etiketi parantez içine yazıyoruz*/
    var t =document.createTextNode(item); /*createTextNode ile elemanın içine yazacağımız text değeri. Döngüde gelecek her bir itemler bunun içine yazılır*/
    li.className='list-group-item';
    /*
       döngüde oluşturduğumuz her bir li elemanının class değerine list-group-item değerini veriyoruz.*/
    li.appendChild(t); /*burada li elemanın parent yani ebeveyn eleman, (t) parantez içindeki ise çocuk eleman. li elemanının içine gelecek olan item1,item2... ler çocuk eleman oluyor*/
    list.appendChild(li); /*Aynı şekilde li elemanlarını liste yani list elemanının içine ekliyoruz. */


    var span = document.createElement('span');
    /*span 
       değişkenine span elemanı atıyoruz ki burada yapmak istediğimiz her bir li elemanının sağ tarafına x eklemek*/
    var text = document.createTextNode('\u00D7'); /*x için text değişkeni tanımlıyoruz ascıı karşılığını yazdık parantez içine.*/
    span.className='close'; /*close sınıfımızı style.cs dosyamızda tanımlamıştık. burda span için kullanıyoruz*/

    span.appendChild(text); /*text değişkenimizi spanın bir elemanı yapıyoruz.*/

    li.appendChild(span); /*class ı texti hazı olan span elemanımızı li nin içibe almış olduk*/
    
     span.onclick = function(){ /*onclick yerine addeventlistener de kullanılabilirdi. span x etıkladığımızda display none yaparak li elemanını görünmez yapıyoruz*/
        var li =this.parentElement; /*this yani span elemanının parent yani kapsayan elemanı li ye ulaşıyoruz.*/
        li.style.display='none'; /*görünmez yapıyoruz*/
         li.classList.remove('checked'); /*span yani çarpıya
         tıklandığında li elemanının içinden checked sınıfını kaldırıyoruz çünkü html de checked sınıfı olduğu gibi kalırsa deleteAll olayında checked sınıfını saydığımızda hatalı sonuç elde ederiz.*/
    }

    
}



















