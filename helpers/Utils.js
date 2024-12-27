class Utils {
  static formatDate(date, format) {
    let formatSplited = format.split(" ");
    let dateFormat = formatSplited[0] ?? "";
    let hourFormat = formatSplited[1] ?? "";

    const dateAttributes = {
      dd: date.getDay(),
      mm: date.getMonth(),
      yyyy: date.getFullYear(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    };

    const validFormats = {
      "dd/mm/yyyy": `${dateAttributes.dd}/${dateAttributes.mm}/${dateAttributes.yyyy}`,
      "dd-mm-yyyy": `${dateAttributes.dd}-${dateAttributes.mm}-${dateAttributes.yyyy}`,
      "h:m:s": `${dateAttributes.h}:${dateAttributes.m}:${dateAttributes.s}`,
    };

    let dateFormated = validFormats[dateFormat] ?? "";
    let hourFormated = validFormats[hourFormat] ?? "";

    return `${dateFormated} ${hourFormated}`.trim();
  }

  static isEmpty(object) {
    return JSON.stringify(object) === "{}";
  }
}
