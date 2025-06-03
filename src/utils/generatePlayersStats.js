import { bodies } from "@/data/character/bodies";
import { getRandomArrayValue } from "./getRandomArrayValue";
import { health } from "@/data/character/health";
import { hobbies } from "@/data/character/hobbies";
import { personality } from "@/data/character/personality";
import { phobias } from "@/data/character/phobias";
import { items } from "@/data/character/items";
import { info } from "@/data/character/info";
import { abilities } from "@/data/character/abilities";

export const generatePlayersStats = (playersIds) => {
  const getHealth = () => {
    if (Math.random() < 0.3) {
      return "Здоровий";
    } else {
      return getRandomArrayValue(health);
    }
  };

  return playersIds.map((playerId) => {
    return {
      id: playerId,
      sex: {
        value:
          getRandomArrayValue(["чоловік", "Жінка"]) +
          `(Вік: ${Math.floor(Math.random() * 101)})`,
        visible: false,
      },
      bodyType: {
        value:
          getRandomArrayValue(bodies) +
          `(Ріст: ${Math.floor(Math.random() * 201)})` +
          `(Раса: ${getRandomArrayValue([
            "білий",
            "чорний",
            "азіат",
            "москаль",
          ])})`,
        visible: false,
      },
      health: { value: getHealth(), visible: false },
      hobby: {
        value:
          getRandomArrayValue(hobbies) +
          `(${getRandomArrayValue([
            "Новачок",
            "Аматор",
            "Досвідчений",
            "Професіонал",
            "Майстер",
          ])})`,
        visible: false,
      },
      personality: { value: getRandomArrayValue(personality), visible: false },
      phobia: { value: getRandomArrayValue(phobias), visible: false },
      item: { value: getRandomArrayValue(items), visible: false },
      info: { value: getRandomArrayValue(info), visible: false },
      isChildFree: {
        value: getRandomArrayValue(["так", "ні"]),
        visible: false,
      },
      ability1: { value: getRandomArrayValue(abilities), visible: false },
      ability2: { value: getRandomArrayValue(abilities), visible: false },
    };
  });
};

// def generate_character():
//     health_options = load_data('character/health.txt')
//     if random.random() < 0.3:
//         health = "Здоровий"
//     else:
//         health = f"{random.choice(health_options)} ({random.choice(['Легка', 'Середня', 'Важка', 'Критична'])})"

//     character = {
//         'Вік': random.randint(1, 99),
//         'Чайлд-фрі': 'Так' if random.random() < 0.1 else 'Ні',
//         'Зріст': random.randint(130, 230),
//         'Раса': random.choice(['білий', 'чорний', 'азіат']),
//         'Стать': random.choice(['чоловік', 'жінка']),
//         'Тіло': random.choice(load_data('character/bodies.txt')),
//         'Робота': random.choice(load_data('character/job.txt')),
//         'Стаж роботи': random.choice(['Новачок', 'Стажер', 'Любитель', 'досвітчений', 'Профессионал', 'Сеньйор']),
//         'Хобі': random.choice(load_data('character/hobbies.txt')),
//         'Стаж хобі': random.choice(['Новачок', 'Аматор', 'Досвідчений', 'Професіонал', 'Майстер']),
//         'Здоров’я': health,
//         'Фобія': random.choice(load_data('character/phobias.txt')),
//         'Особистість': random.choice(load_data('character/personality.txt')),
//         'Додаткова інформація': random.choice(load_data('character/info.txt')),
//         "Спецможливості 1": random.choice(load_data('character/abilities.txt')),
//         "Спецможливості 2": random.choice(load_data('character/abilities.txt')),
//         'Предмет': random.choice(load_data('character/items.txt'))
//     }

//     return "\n".join([f"{key}: {value}" for key, value in character.items()])
