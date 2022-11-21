export default function changeLang(lang, result) {
  const startBtn = document.querySelector('.btn__start')
  const catalogBtn = document.querySelector('.btn__catalog')
  const descriptionBtn = document.querySelector('.btn__description')
  const quizScore = document.querySelector('.quiz__score')
  const quizGenres = document.querySelectorAll('.genre')
  const quizBtn = document.querySelector('.next__btn')
  const descriptionInfo = document.querySelector('.description__info')
  const descriptionBackBtn = document.querySelector('.description__btn')
  const warningInfo = document.querySelector('.warning__info')
  const warningBtn = document.querySelector('.warning__btn')
  const resultsTitle = document.querySelector('.results__title')
  const resultsBtn = document.querySelector('.results__btn')

  if (lang === 'EN') {
    startBtn.innerText = 'Start'
    catalogBtn.innerText = 'Catalog'
    descriptionBtn.innerText = 'Description'
    quizScore.innerText = `Score: ${result}`
    quizGenres.forEach((el, idx) => {
      switch (idx) {
        case 0:
          el.innerText = 'Alternative'
          break
        case 1:
          el.innerText = 'Electronic'
          break
        case 2:
          el.innerText = 'Indie'
          break
        case 3:
          el.innerText = 'Metal'
          break
        case 4:
          el.innerText = 'Post-Soviet'
          break
        case 5:
          el.innerText = 'Punk'
          break
      }
    })
    quizBtn.innerText = 'Next Level'
    descriptionInfo.innerText =
      "Scott Pilgrim vs. the World is a test game where you have to win Ramona's heart. In order to do this, you need to fight 7 of her evil exes. To win, you need to guess the artist and the song your opponent is playing. If you manage to earn the maximum number of points, you will receive the power of RESPECT. Good luck!"
    descriptionBackBtn.innerText = 'Back to main menu'
    warningInfo.innerText = "Make sure you select the correct language.\nIn the heat of battle, you just won't have time for it!"
    warningBtn.innerText = "I'm ready!"
    resultsTitle.innerText = "Congratulations, you have defeated all the evil exes and won Ramona's heart!"
    resultsBtn.innerText = 'Try again'
  } else {
    startBtn.innerText = 'Начать'
    catalogBtn.innerText = 'Каталог'
    descriptionBtn.innerText = 'Описание'
    quizScore.innerText = `Счёт: ${result}`
    quizGenres.forEach((el, idx) => {
      switch (idx) {
        case 0:
          el.innerText = 'Альтернативный'
          break
        case 1:
          el.innerText = 'Электро'
          break
        case 2:
          el.innerText = 'Инди'
          break
        case 3:
          el.innerText = 'Метал'
          break
        case 4:
          el.innerText = 'Русский'
          break
        case 5:
          el.innerText = 'Панк'
          break
      }
    })
    quizBtn.innerText = 'Следующий уровень'
    descriptionInfo.innerText =
      'Скотт Пилигрим против всего мира - это игра-тест, где вам предстоит завоевать сердце Рамоны. Для того, чтобы сделать это, вы должны сразиться с 7 её злыми бывшими. Для победы вам необходимо угадать исполнителя и песню, которую играет ваш противник. Если у вас получится заработать максимальное количество баллов, вы получите силу РЕСПЕКТА. Удачи!'
    descriptionBackBtn.innerText = 'Вернуться в главное меню'
    warningInfo.innerText = 'Убедитесь, что вы выбрали подходящий язык.\nВ пылу сражений у вас просто не найдётся времени на это!'
    warningBtn.innerText = 'Я готов!'
    resultsTitle.innerText = 'Поздравляю, вы победили всех злых бывших и завоевали сердце Рамоны!'
    resultsBtn.innerText = 'Попробовать снова'
  }
}
