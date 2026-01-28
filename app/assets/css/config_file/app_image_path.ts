export class ImagePath {
  static readonly ASSETS_PATH = '/assets';
  static readonly IMAGES_PATH = `${ImagePath.ASSETS_PATH}/images`;
  static readonly CSS_PATH = `${ImagePath.ASSETS_PATH}/css`;
  static readonly JS_PATH = `${ImagePath.ASSETS_PATH}/js`;

  static getImagePath(imageName: string): string {
    return `${ImagePath.IMAGES_PATH}/${imageName}`;
  }

  static getCssPath(cssFileName: string): string {
    return `${ImagePath.CSS_PATH}/${cssFileName}`;
  }

  static getJsPath(jsFileName: string): string {
    return `${ImagePath.JS_PATH}/${jsFileName}`;
  }
}
