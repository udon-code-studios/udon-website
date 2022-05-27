import type { NextPage } from "next";
import Head from "next/head";

const Notes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>

      {/* page */}
      <div className="mx-auto flex w-full max-w-screen-sm flex-col space-y-4 py-12 px-4 text-primary dark:text-secondary-focus-dark">
        <h1 className="text-4xl font-semibold text-primary dark:text-primary-dark">Notes</h1>
        <p className="italic text-quaternary">Quick notes / tips</p>

        {/* Serve current directory with NodeJS */}
        <h2
          id="serve-current-direcotry-with-nodejs"
          className="scroll-mt-20 pt-8 text-2xl font-semibold text-secondary  dark:text-secondary-dark"
        >
          Serve current directory with NodeJS
        </h2>
        <p className="dark:text-quaternary-dark !mt-2 text-sm italic text-zinc-500">2021/10/15</p>
        <p>When you want to statically serve files over HTTP:</p>
        <code className="bg-tertiary p-4 text-primary dark:bg-tertiary-dark dark:text-primary-dark">
          {`npm install -g http-server`}
          <br />
          {`http-server -p 8000`}
        </code>

        {/* Mount external drive in WSL */}
        <h2
          id="mount-external-drive-in-wsl"
          className="scroll-mt-14 pt-8 text-2xl font-semibold text-secondary dark:text-secondary-dark"
        >
          Mount external drive in WSL
        </h2>
        <p className="dark:text-quaternary-dark !mt-2 text-sm italic text-quaternary">2021/10/14</p>
        <p>
          When you want to mount an external drive in WSL (<em>NOTE: replace f with the appropriate drive letter</em>):
        </p>
        <code className="bg-tertiary p-4 text-primary dark:bg-tertiary-dark dark:text-primary-dark">
          {`sudo mkdir /mnt/f && sudo mount -t drvfs f: /mnt/f`}
        </code>
        <p>Then to unmount:</p>
        <code className="bg-tertiary p-4 text-primary dark:bg-tertiary-dark dark:text-primary-dark">
          {`sudo umount /mnt/f && sudo rmdir /mnt/f`}
        </code>

        {/* ssh-copy-id in PowerShell */}
        <h2
          id="ssh-copy-id-in-powershell"
          className="scroll-mt-14 pt-8 text-2xl font-semibold text-secondary dark:text-secondary-dark"
        >
          <code>ssh-copy-id</code> in PowerShell
        </h2>
        <p className="dark:text-quaternary-dark !mt-2 text-sm italic text-quaternary">2021/09/11</p>
        <p>
          When you have a ssh key that was generated in PS (e.g.
          <code className="text-secondary dark:text-secondary-dark">&nbsp;ssh-keygen -t rsa -b 4096&nbsp;</code>) which
          you want to copy to a remote machine for automatic login (e.g. passwordless connections to remote machines via
          VS Code's Remote - SSH extension):
        </p>
        <code className="bg-tertiary p-4 text-primary dark:bg-tertiary-dark dark:text-primary-dark">
          {`$USER_AT_HOST="your-user-name-on-host@hostname"`}
          <br />
          {`$PUBKEYPATH="$HOME\\.ssh\\id_rsa\\.pub"`}
          <br />
          {`$pubKey=(Get-Content "$PUBKEYPATH" | Out-String); ssh "$USER_AT_HOST" "mkdir -p ~/.ssh && chmod 700 ~/.ssh && echo '\${pubKey}' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"`}
        </code>
      </div>
    </>
  );
};

export default Notes;
