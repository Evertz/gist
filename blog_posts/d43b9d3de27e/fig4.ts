export class Domain {
  static parseMessage(json): Domain {
    const domain = new Domain();
    domain.tagList = TagList.parseMessage(json.TagList);
    domain.time = AmountOfTime.parseMessage(json.Time);

    return domain;
  }
  public toMessage() {
    const domain: any = {};
    domain.TagList = this.tagList.toMessage();
    domain.Time = this.time.toMessage();
  }
  public tagList: TagList;
  public time: AmountOfTime;
}