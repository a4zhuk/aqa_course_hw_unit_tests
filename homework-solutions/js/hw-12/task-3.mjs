/*
На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
*/

const usersRequest = fetch("https://jsonplaceholder.typicode.com/users");
const albumsRequest = fetch("https://jsonplaceholder.typicode.com/albums");
const photosRequest = fetch("https://jsonplaceholder.typicode.com/photos");
const [userResponse, albumsResponse, photosResponse] = await Promise.all([usersRequest, albumsRequest, photosRequest]);
const users = await userResponse.json();
const albums = await albumsResponse.json();
const photos = await photosResponse.json();


const usersArr = []
users.forEach(user => {
  usersArr.push({
    name: user.name,
    email: user.email,
    phone: user.phone,
    company: user.company.name,
    albums: getUserAlbums(user.id),
  });
});

function getUserAlbums(userId){
  const userAlbums = albums.filter(album => album.userId === userId);
  return userAlbums.map(album => `${album.title} (${getNumberOfUserPhotos(album.id)} photos)`);
};

function getNumberOfUserPhotos(albumId){
  return photos.filter(photo => photo.albumId === albumId).length;
};

function allUsersInfo(users){
  for (let i = 0; i < users.length; i++){
    console.log(`${i + 1}.`, users[i]);
  };
};

allUsersInfo(usersArr);
