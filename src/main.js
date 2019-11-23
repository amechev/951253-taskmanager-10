import {createSiteMenuTemplate} from "./components/menu";
import {createSiteFilterTemplate} from "./components/filter";
import {createSiteBoardTemplate} from "./components/board";
import {createTaskTemplate} from "./components/task";
import {createTaskEditTemplate} from "./components/task.edit";
import {createLoadMoreButtonTemplate} from "./components/load-more";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeEnd`);
render(siteMainElement, createSiteFilterTemplate(), `beforeEnd`);
render(siteMainElement, createSiteBoardTemplate(), `beforeEnd`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate(), `beforeEnd`);

new Array(TASK_COUNT)
  .fill(``)
  .forEach(
      () => {
        render(taskListElement, createTaskTemplate(), `beforeEnd`);
      }
  );

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeEnd`);
