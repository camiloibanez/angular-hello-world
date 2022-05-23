import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customtitlecase'
})
export class CustomTitleCase implements PipeTransform {
    notCapitalized: string[] = ["a", "an", "the", "for", "and", "nor", "but", "or", "yet", "so", "aboard", "about", "above", "across", "after",
        "against", "along", "amid", "among", "anti", "around", "as", "at", "before", "behind", "below", "beneath", "beside", "besides",
        "between", "beyond", "by", "concerning", "considering", "despite", "down", "during", "except", "excepting", "excluding", 
        "following", "from", "in", "inside", "into", "like", "minus", "near", "of", "off", "on", "onto", "opposite", "outside", "over",
        "past", "per", "plus", "regarding", "round", "save", "since", "than", "through", "to", "toward", "towards", "under", "underneath",
        "unlike", "until", "up", "upon", "versus", "via", "with", "within", "without"];

    transform(value: string): string {
        value = value.toLowerCase();
        let words = value.split(" ");
        for(let i = 0; i < words.length; i++) {
            if (!this.notCapitalized.includes(words[i]) || i === 0) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
            }
        }

        let result = words.join(" ");

        return result;
    }
}