# vfile-reporter-github-checks

> Format vfile results as GitHub checks annotations

## GitHub checks annotation format

```json
[
  {
    "filename": "string",
    "blob_href": "url",
    "start_line": 0,
    "end_line": 0,
    "warning_level": "enum",
    "message": "string",
    "title": "optional string",
    "raw_details": "optional string",
    "images": [
      {
        "alt": "string",
        "image_url": "url",
        "caption": "string"
      }
    ]
  }
]
```
