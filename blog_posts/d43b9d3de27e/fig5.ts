@JsonObject({name: "Domain"})
export class Domain {
  @JsonProperty({name: "TagList"})
  public tagList: TagList;
  @JsonProperty({name: "Time"})
  public time: AmountOfTime;
}
