"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Common = (function () {
    function Common() {
        this.spreadfasterNormalizer = function (result) {
            var normalized = [];
            for (var i = 0; i < result.length; i++) {
                var entity = result[i];
                try {
                    var caption = "";
                    var name = "";
                    var fullSizeUrl = "";
                    var thumbUrl = "";
                    var videoUrl = "";
                    if (entity.network == "facebook") {
                        caption = entity.name;
                        name = entity.from.name;
                        fullSizeUrl = entity.images[0].source;
                        thumbUrl = entity.images[4].source;
                        normalized.push({
                            network: "facebook",
                            caption: caption,
                            user: name,
                            imageUrl: fullSizeUrl,
                            thumbUrl: thumbUrl
                        });
                    }
                    else if (entity.network == "instagram") {
                        if (entity.caption !== undefined) {
                            if (entity.caption.text !== undefined) {
                                caption = entity.caption.text;
                                name = entity.caption.from.username;
                            }
                            else {
                                caption = entity.caption;
                                name = entity.owner.username;
                            }
                        }
                        else {
                            caption = entity.content.content_body;
                            name = entity.author.name;
                        }
                        if (entity.images !== undefined) {
                            fullSizeUrl = entity.images.standard_resolution.url;
                            thumbUrl = entity.images.low_resolution.url;
                        }
                        else {
                            if (entity.content !== undefined) {
                                if (entity.content.content_picture !== undefined) {
                                    fullSizeUrl = entity.content.content_picture;
                                    thumbUrl = entity.content.content_picture;
                                }
                                else {
                                    fullSizeUrl = entity.content.content_video_thumbnail;
                                    thumbUrl = entity.content.content_video_thumbnail;
                                }
                            }
                            else {
                                fullSizeUrl = entity.display_src;
                                thumbUrl = entity.display_src;
                            }
                        }
                        if (entity.source !== undefined && (entity.source.source_url.indexOf('.mp4') > -1 || entity.source.source_url.indexOf('.mpg') > -1 || entity.source.source_url.indexOf('.mpeg') > -1)) {
                            videoUrl = entity.source.source_url;
                        }
                        else {
                            videoUrl = "";
                        }
                        normalized.push({
                            network: "instagram",
                            caption: caption,
                            user: name,
                            imageUrl: fullSizeUrl,
                            thumbUrl: thumbUrl
                        });
                    }
                    else if (entity.network == "twitter") {
                        if (entity.retweeted_status)
                            entity = entity.retweeted_status;
                        caption = entity.text;
                        name = entity.user.name;
                        for (var t = 0; t < entity.entities.media.length; t++) {
                            fullSizeUrl = entity.entities.media[t].media_url_https;
                            thumbUrl = entity.entities.media[t].media_url_https + ":small";
                            normalized.push({
                                network: "twitter",
                                caption: caption,
                                user: name,
                                imageUrl: fullSizeUrl,
                                thumbUrl: thumbUrl
                            });
                        }
                    }
                }
                catch (ex) {
                    console.log(ex);
                }
            }
            return normalized;
        };
    }
    return Common;
}());
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFBQTtRQUVJLDJCQUFzQixHQUFHLFVBQUMsTUFBaUI7WUFDbEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRTlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQztvQkFDSixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDZCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUVsQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUN0QixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ3hCLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzt3QkFDdEMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUVuQyxVQUFVLENBQUMsSUFBSSxDQUFDOzRCQUNmLE9BQU8sRUFBRSxVQUFVOzRCQUNuQixPQUFPLEVBQUUsT0FBTzs0QkFDaEIsSUFBSSxFQUFFLElBQUk7NEJBQ1YsUUFBUSxFQUFFLFdBQVc7NEJBQ3JCLFFBQVEsRUFBRSxRQUFRO3lCQUNsQixDQUFD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TCxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUE3R0QsSUE2R0M7QUE3R1ksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIENvbW1vbiB7ICAgIFxyXG4gICAgXHJcbiAgICBzcHJlYWRmYXN0ZXJOb3JtYWxpemVyID0gKHJlc3VsdDpBcnJheTxhbnk+KTpBcnJheTxhbnk+ID0+IHtcclxuICAgICAgICAgICAgIHZhciBub3JtYWxpemVkID0gW107XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBlbnRpdHkgPSByZXN1bHRbaV07XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHZhciBjYXB0aW9uID0gXCJcIjtcclxuXHRcdFx0XHRcdHZhciBuYW1lID0gXCJcIjtcclxuXHRcdFx0XHRcdHZhciBmdWxsU2l6ZVVybCA9IFwiXCI7XHJcblx0XHRcdFx0XHR2YXIgdGh1bWJVcmwgPSBcIlwiO1xyXG5cdFx0XHRcdFx0dmFyIHZpZGVvVXJsID0gXCJcIjtcclxuXHJcblx0XHRcdFx0XHRpZiAoZW50aXR5Lm5ldHdvcmsgPT0gXCJmYWNlYm9va1wiKSB7XHJcblx0XHRcdFx0XHRcdGNhcHRpb24gPSBlbnRpdHkubmFtZTtcclxuXHRcdFx0XHRcdFx0bmFtZSA9IGVudGl0eS5mcm9tLm5hbWU7XHJcblx0XHRcdFx0XHRcdGZ1bGxTaXplVXJsID0gZW50aXR5LmltYWdlc1swXS5zb3VyY2U7XHJcblx0XHRcdFx0XHRcdHRodW1iVXJsID0gZW50aXR5LmltYWdlc1s0XS5zb3VyY2U7XHJcblxyXG5cdFx0XHRcdFx0XHRub3JtYWxpemVkLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdG5ldHdvcms6IFwiZmFjZWJvb2tcIixcclxuXHRcdFx0XHRcdFx0XHRjYXB0aW9uOiBjYXB0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdHVzZXI6IG5hbWUsXHJcblx0XHRcdFx0XHRcdFx0aW1hZ2VVcmw6IGZ1bGxTaXplVXJsLFxyXG5cdFx0XHRcdFx0XHRcdHRodW1iVXJsOiB0aHVtYlVybFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKGVudGl0eS5uZXR3b3JrID09IFwiaW5zdGFncmFtXCIpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChlbnRpdHkuY2FwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVudGl0eS5jYXB0aW9uLnRleHQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FwdGlvbiA9IGVudGl0eS5jYXB0aW9uLnRleHQ7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lID0gZW50aXR5LmNhcHRpb24uZnJvbS51c2VybmFtZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXB0aW9uID0gZW50aXR5LmNhcHRpb247XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lID0gZW50aXR5Lm93bmVyLnVzZXJuYW1lO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjYXB0aW9uID0gZW50aXR5LmNvbnRlbnQuY29udGVudF9ib2R5O1xyXG5cdFx0XHRcdFx0XHRcdG5hbWUgPSBlbnRpdHkuYXV0aG9yLm5hbWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmIChlbnRpdHkuaW1hZ2VzICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRmdWxsU2l6ZVVybCA9IGVudGl0eS5pbWFnZXMuc3RhbmRhcmRfcmVzb2x1dGlvbi51cmw7XHJcblx0XHRcdFx0XHRcdFx0dGh1bWJVcmwgPSBlbnRpdHkuaW1hZ2VzLmxvd19yZXNvbHV0aW9uLnVybDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZW50aXR5LmNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVudGl0eS5jb250ZW50LmNvbnRlbnRfcGljdHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bGxTaXplVXJsID0gZW50aXR5LmNvbnRlbnQuY29udGVudF9waWN0dXJlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aHVtYlVybCA9IGVudGl0eS5jb250ZW50LmNvbnRlbnRfcGljdHVyZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmdWxsU2l6ZVVybCA9IGVudGl0eS5jb250ZW50LmNvbnRlbnRfdmlkZW9fdGh1bWJuYWlsO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aHVtYlVybCA9IGVudGl0eS5jb250ZW50LmNvbnRlbnRfdmlkZW9fdGh1bWJuYWlsO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZ1bGxTaXplVXJsID0gZW50aXR5LmRpc3BsYXlfc3JjO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGh1bWJVcmwgPSBlbnRpdHkuZGlzcGxheV9zcmM7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZW50aXR5LnNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIChlbnRpdHkuc291cmNlLnNvdXJjZV91cmwuaW5kZXhPZignLm1wNCcpID4gLTEgfHwgZW50aXR5LnNvdXJjZS5zb3VyY2VfdXJsLmluZGV4T2YoJy5tcGcnKSA+IC0xIHx8IGVudGl0eS5zb3VyY2Uuc291cmNlX3VybC5pbmRleE9mKCcubXBlZycpID4gLTEpKSB7XHJcblx0XHRcdFx0XHRcdFx0dmlkZW9VcmwgPSBlbnRpdHkuc291cmNlLnNvdXJjZV91cmw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dmlkZW9VcmwgPSBcIlwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRub3JtYWxpemVkLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdG5ldHdvcms6IFwiaW5zdGFncmFtXCIsXHJcblx0XHRcdFx0XHRcdFx0Y2FwdGlvbjogY2FwdGlvbixcclxuXHRcdFx0XHRcdFx0XHR1c2VyOiBuYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGltYWdlVXJsOiBmdWxsU2l6ZVVybCxcclxuXHRcdFx0XHRcdFx0XHR0aHVtYlVybDogdGh1bWJVcmxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChlbnRpdHkubmV0d29yayA9PSBcInR3aXR0ZXJcIikge1xyXG5cdFx0XHRcdFx0XHRpZiAoZW50aXR5LnJldHdlZXRlZF9zdGF0dXMpXHJcblx0XHRcdFx0XHRcdFx0ZW50aXR5ID0gZW50aXR5LnJldHdlZXRlZF9zdGF0dXM7XHJcblxyXG5cdFx0XHRcdFx0XHRjYXB0aW9uID0gZW50aXR5LnRleHQ7XHJcblx0XHRcdFx0XHRcdG5hbWUgPSBlbnRpdHkudXNlci5uYW1lO1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciB0ID0gMDsgdCA8IGVudGl0eS5lbnRpdGllcy5tZWRpYS5sZW5ndGg7IHQrKykge1xyXG5cdFx0XHRcdFx0XHRcdGZ1bGxTaXplVXJsID0gZW50aXR5LmVudGl0aWVzLm1lZGlhW3RdLm1lZGlhX3VybF9odHRwcztcclxuXHRcdFx0XHRcdFx0XHR0aHVtYlVybCA9IGVudGl0eS5lbnRpdGllcy5tZWRpYVt0XS5tZWRpYV91cmxfaHR0cHMgKyBcIjpzbWFsbFwiO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRub3JtYWxpemVkLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0bmV0d29yazogXCJ0d2l0dGVyXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRjYXB0aW9uOiBjYXB0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXNlcjogbmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdGltYWdlVXJsOiBmdWxsU2l6ZVVybCxcclxuXHRcdFx0XHRcdFx0XHRcdHRodW1iVXJsOiB0aHVtYlVybFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChleCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XHJcbiAgICB9XHJcblxyXG59Il19