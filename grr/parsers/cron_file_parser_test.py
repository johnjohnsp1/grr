#!/usr/bin/env python
"""Tests for grr.parsers.cron_file_parser."""

import os


from grr.lib import flags
from grr.lib import test_lib
from grr.lib.rdfvalues import client as rdf_client
from grr.lib.rdfvalues import paths as rdf_paths
from grr.parsers import cron_file_parser


class TestCronTabParsing(test_lib.GRRBaseTest):
  """Test parsing of cron files."""

  def testCronTabParser(self):
    """Ensure we can extract jobs from a crontab file."""
    parser = cron_file_parser.CronTabParser()
    client = "C.1000000000000000"
    results = []

    path = os.path.join(self.base_path, "parser_test", "crontab")
    plist_file = open(path)
    stat = rdf_client.StatEntry(
        aff4path=rdf_client.ClientURN(client).Add("fs/os").Add(path),
        pathspec=rdf_paths.PathSpec(path=path,
                                    pathtype=rdf_paths.PathSpec.PathType.OS),
        st_mode=16877)
    results.extend(list(parser.Parse(stat, plist_file, None)))

    self.assertEqual(len(results), 1)

    for result in results:
      self.assertEqual(result.jobs[0].minute, "1")
      self.assertEqual(result.jobs[0].hour, "2")
      self.assertEqual(result.jobs[0].dayofmonth, "3")
      self.assertEqual(result.jobs[0].month, "4")
      self.assertEqual(result.jobs[0].dayofweek, "5")
      self.assertEqual(result.jobs[0].command, "/usr/bin/echo \"test\"")


def main(args):
  test_lib.main(args)


if __name__ == "__main__":
  flags.StartMain(main)
